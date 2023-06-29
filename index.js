const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => "Hello World"
  }
};

// Set up an Apollo Server with Express
async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  // Create an Express app
  const app = express();

  // Start the server
  await server.start();

  // Apply the middleware to the Express app
  server.applyMiddleware({ app });

  // Start listening on a port
  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
