require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

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
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Stripe webhook must receive raw body — mount before express.json()
app.use('/api/stripe', require('./routes/stripeWebhookRoutes'));

app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));

// Routes
app.use('/api/frontend', require('./routes/frontendWebDesign'));
app.use('/api/auth',     require('./routes/authRoutes'));
app.use('/api/clients',  require('./routes/clientRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/invoices', require('./routes/invoiceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/quotes',   require('./routes/quoteRoutes'));
app.use('/api/le-mode-co', require('./routes/leModeCoRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Health checks
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
