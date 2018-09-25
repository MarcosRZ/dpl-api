'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* babel-plugin-inline-import './root.graphql' */const Root = 'scalar Date\n\ntype RootQuery {\n  posts (skip: Int, limit: Int): [Post]\n}\n\ntype RootMutation {\n  createPost(post: PostDataModel): CreatePostResult\n  updatePost(post: PostDataModel): UpdatePostResult\n  deletePost(_id: ID!): DeletePostResult\n}\n\nschema {\n  query: RootQuery\n  mutation: RootMutation\n}';
/* babel-plugin-inline-import './post.graphql' */const Post = 'type Post {\n  _id: ID!\n  title: String\n  description: String\n  content: String\n  date: Date\n  deletionDate: Date\n} \n\ninput PostDataModel {\n  _id: ID\n  title: String\n  description: String\n  content: String\n  date: Date\n  deletionDate: Date\n}\n\ntype CreatePostResult {\n  OK: Boolean\n  error: String\n  payload: Post\n}\n\ntype UpdatePostResult {\n  OK: Boolean\n  error: String\n  payload: Post\n}\n\ntype DeletePostResult {\n  OK: Boolean\n  error: String\n  payload: [Post]\n}\n\n';
exports.default = [Root, Post];