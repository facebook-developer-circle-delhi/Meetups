const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./src/resolvers");
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(({ port }) => console.log("port", port));
