import post from './post';
import date from './date';

export default {
  RootQuery: {
    ...post.query,
  },
  RootMutation: {
    ...post.mutation,
  },
  ...date,
  ...post.resolvers,
};
