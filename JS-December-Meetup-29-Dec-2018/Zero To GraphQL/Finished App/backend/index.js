const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./src/resolvers");
const prisma = require("./prisma");
const { items } = require("./db");
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma,
    items
  }
});
server.start(({ port }) => console.log("port", port));
