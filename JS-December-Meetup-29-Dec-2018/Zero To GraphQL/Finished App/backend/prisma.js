const {Prisma}  = require('prisma-binding');
const prisma = new Prisma({
    typeDefs:'src/generated/prisma.graphql',
    endpoint:'https://eu1.prisma.sh/siddhant-15848d/backend/dev'
})
module.exports = prisma;