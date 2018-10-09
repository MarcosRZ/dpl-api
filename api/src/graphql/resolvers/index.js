import post from './post';
import date from './date';
import host from './host';

export default {
  RootQuery: {
    ...post.query,
    ...host.query,
  },
  RootMutation: {
    ...post.mutation,
    ...host.mutation,
  },
  ...date,
  ...post.resolvers,
  ...host.resolvers,
};
