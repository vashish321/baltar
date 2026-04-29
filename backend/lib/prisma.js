// Shared Prisma singleton — import this everywhere instead of instantiating
// PrismaClient directly in routes. A single instance reuses the connection
// pool across the entire process lifetime.
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
