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

// Stripe webhook endpoint — must receive raw body (set in server.js before express.json)
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        console.log('Payment succeeded:', paymentIntent.id);
        await LeModeCoService.confirmPayment(paymentIntent.id);
        console.log('Subscription activated for payment:', paymentIntent.id);
        break;
      }

      case 'payment_intent.payment_failed': {
        const failedPayment = event.data.object;
        console.log('Payment failed:', failedPayment.id);
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient();
        await prisma.customerSubscription.updateMany({
          where: { stripePaymentId: failedPayment.id },
          data: { status: 'FAILED' },
        });
        await prisma.$disconnect();
        break;
      }

      case 'payment_intent.canceled': {
        const canceledPayment = event.data.object;
        console.log('Payment canceled:', canceledPayment.id);
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient();
        await prisma.customerSubscription.updateMany({
          where: { stripePaymentId: canceledPayment.id },
          data: { status: 'CANCELLED' },
        });
        await prisma.$disconnect();
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
