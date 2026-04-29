require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// ─── Security headers ─────────────────────────────────────────────────────────
app.use(helmet());

// ─── CORS ─────────────────────────────────────────────────────────────────────
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://baltar.ca',
    'https://www.baltar.ca',
    /\.baltar\.ca$/,
    'https://baltar-inc.vercel.app',
    /\.vercel\.app$/,
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// ─── Rate limiters ────────────────────────────────────────────────────────────

// Strict limiter for auth endpoints (login, verify)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});

// General API limiter — prevents scraping and brute-force on all other routes
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});

// ─── Stripe webhook — must receive raw body, mount before express.json() ──────
app.use('/api/stripe', require('./routes/stripeWebhookRoutes'));

// ─── Body parsing & logging ───────────────────────────────────────────────────
app.use(express.json({ limit: '1mb' }));
app.use(cors(corsOptions));
app.use(morgan('dev'));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/auth',       authLimiter,    require('./routes/authRoutes'));
app.use('/api/frontend',   generalLimiter, require('./routes/frontendWebDesign'));
app.use('/api/clients',    generalLimiter, require('./routes/clientRoutes'));
app.use('/api/projects',   generalLimiter, require('./routes/projectRoutes'));
app.use('/api/invoices',   generalLimiter, require('./routes/invoiceRoutes'));
app.use('/api/bookings',   generalLimiter, require('./routes/bookingRoutes'));
app.use('/api/quotes',     generalLimiter, require('./routes/quoteRoutes'));
app.use('/api/le-mode-co', generalLimiter, require('./routes/leModeCoRoutes'));
app.use('/api/products',   generalLimiter, require('./routes/productRoutes'));

// ─── Health checks ────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    message: 'Baltar Backend running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString(), uptime: process.uptime() });
});

// ─── 404 handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Global error handler ─────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(err.status || 500).json({
    error: 'Internal server error',
    ...(process.env.NODE_ENV !== 'production' && { details: err.message }),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
