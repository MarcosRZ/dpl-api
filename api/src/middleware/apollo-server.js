import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../graphql/schemas/typeDefs';
import resolvers from '../graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default (app, { configureSubscriptions } = {}) => {
  const apollo = new ApolloServer({ typeDefs, resolvers });

  // Apollo Server
  apollo.applyMiddleware({ app });

  // Configure subscriptions
  if (configureSubscriptions) {
    apollo.installSubscriptionHandlers(app);
  }

  return apollo;
};
