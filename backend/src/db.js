// This file connects to the remote prisma db and gives us the ability to query it through javascript.

const { Prisma } = require('prisma-binding');

module.exports = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});
