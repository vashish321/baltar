const express = require('express');
const router = express.Router();

// Guard: do not crash if Stripe key is absent
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('⚠️  Stripe disabled: STRIPE_SECRET_KEY not found in environment');
  router.all('*', (req, res) => {
    res.status(503).json({ error: 'Stripe not configured on this server' });
  });
  module.exports = router;
  return;
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const LeModeCoService = require('../services/leModeCoService');
const prisma = require('../lib/prisma');

// Stripe webhook — must receive raw body (mounted before express.json in server.js)
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const pi = event.data.object;
        console.log('Payment succeeded:', pi.id);
        await LeModeCoService.confirmPayment(pi.id);
        break;
      }
      case 'payment_intent.payment_failed': {
        const pi = event.data.object;
        console.log('Payment failed:', pi.id);
        await prisma.customerSubscription.updateMany({
          where: { stripePaymentId: pi.id },
          data: { status: 'FAILED' },
        });
        break;
      }
      case 'payment_intent.canceled': {
        const pi = event.data.object;
        console.log('Payment canceled:', pi.id);
        await prisma.customerSubscription.updateMany({
          where: { stripePaymentId: pi.id },
          data: { status: 'CANCELLED' },
        });
        break;
      }
      default:
        console.log(`Unhandled Stripe event type: ${event.type}`);
    }
    res.json({ received: true });
  } catch (error) {
    console.error('Error handling Stripe webhook:', error.message);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
});

module.exports = router;
