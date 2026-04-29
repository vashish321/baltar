const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const ClientService = require('../services/clientService');
const ProjectService = require('../services/projectService');
const AuthService = require('../services/authService');

// Create new booking — public, used by contact forms
router.post('/', async (req, res) => {
  try {
    const {
      email, firstName, lastName, phone, company,
      serviceType, eventDate, eventLocation, guestCount, services, specialRequests,
      websiteType, domainName, hostingNeeds,
      projectTitle, projectDescription, estimatedBudget
    } = req.body;

    if (!email || !firstName || !lastName || !serviceType) {
      return res.status(400).json({
        error: 'Email, first name, last name, and service type are required'
      });
    }

    const client = await ClientService.findOrCreateClient({ email, firstName, lastName, phone, company });

    const booking = await prisma.booking.create({
      data: {
        clientId: client.id,
        serviceType,
        eventDate: eventDate ? new Date(eventDate) : new Date(),
        eventLocation: eventLocation || 'TBD',
        guestCount: guestCount ? parseInt(guestCount) : null,
        services: JSON.stringify(services || []),
        specialRequests: specialRequests || null
      }
    });

    const projectData = {
      clientId: client.id,
      serviceType,
      title: projectTitle || `${serviceType === 'FRONTEND_WEB_DESIGN' ? 'Website Development' : 'Event Services'} - ${firstName} ${lastName}`,
      description: projectDescription || specialRequests,
      estimatedCost: estimatedBudget ? parseFloat(estimatedBudget) : null
    };

    if (serviceType === 'FRONTEND_WEB_DESIGN') {
      projectData.domainName = domainName;
      projectData.hostingPlan = hostingNeeds;
    } else if (serviceType === 'SAVOUR_AND_SIP') {
      projectData.eventDate = eventDate ? new Date(eventDate) : null;
      projectData.eventLocation = eventLocation;
      projectData.guestCount = guestCount ? parseInt(guestCount) : null;
      projectData.eventType = Array.isArray(services) ? services.join(', ') : services;
    }

    const project = await ProjectService.createProject(projectData);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking,
      project,
      client: { id: client.id, firstName: client.firstName, lastName: client.lastName, email: client.email }
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking', details: error.message });
  }
});

// Get all bookings (admin only)
router.get('/', AuthService.requireAuth, async (req, res) => {
  try {
    const { page = 1, limit = 10, serviceType, status } = req.query;
    const skip = (page - 1) * limit;
    const where = {};
    if (serviceType) where.serviceType = serviceType;
    if (status) where.status = status;

    const bookings = await prisma.booking.findMany({
      where,
      include: { client: { select: { id: true, firstName: true, lastName: true, email: true, company: true } } },
      orderBy: { createdAt: 'desc' },
      skip: parseInt(skip),
      take: parseInt(limit)
    });
    const total = await prisma.booking.count({ where });

    res.json({ success: true, bookings, pagination: { page: parseInt(page), limit: parseInt(limit), total, pages: Math.ceil(total / limit) } });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings', details: error.message });
  }
});

// Get booking by ID (admin only)
router.get('/:bookingId', AuthService.requireAuth, async (req, res) => {
  try {
    const booking = await prisma.booking.findUnique({ where: { id: req.params.bookingId }, include: { client: true } });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json({ success: true, booking });
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ error: 'Failed to fetch booking', details: error.message });
  }
});

// Update booking status (admin only)
router.patch('/:bookingId/status', AuthService.requireAuth, async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ error: 'Status is required' });
    const booking = await prisma.booking.update({
      where: { id: req.params.bookingId },
      data: { status, updatedAt: new Date() },
      include: { client: true }
    });
    res.json({ success: true, message: 'Booking status updated successfully', booking });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({ error: 'Failed to update booking status', details: error.message });
  }
});

// Delete booking (admin only)
router.delete('/:bookingId', AuthService.requireAuth, async (req, res) => {
  try {
    await prisma.booking.delete({ where: { id: req.params.bookingId } });
    res.json({ success: true, message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Failed to delete booking', details: error.message });
  }
});

// Get client bookings (admin only)
router.get('/client/:clientId', AuthService.requireAuth, async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({ where: { clientId: req.params.clientId }, orderBy: { createdAt: 'desc' } });
    res.json({ success: true, bookings });
  } catch (error) {
    console.error('Error fetching client bookings:', error);
    res.status(500).json({ error: 'Failed to fetch client bookings', details: error.message });
  }
});

module.exports = router;
