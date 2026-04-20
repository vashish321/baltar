// Shared Prisma singleton — import this instead of instantiating PrismaClient
// directly in routes or services. A single instance reuses the connection pool
// across the entire process lifetime.
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
