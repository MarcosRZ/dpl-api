"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './root.graphql' */
const Root = "scalar Date\nscalar ObjectID\n\ntype RootQuery {\n  posts (skip: Int, limit: Int): [Post]\n  hosts (skip: Int, limit: Int): [Host]\n}\n\ntype RootMutation {\n  createPost(post: PostDataModel): CreatePostResult\n  updatePost(post: PostDataModel): UpdatePostResult\n  deletePost(_id: String!): DeletePostResult\n\n  createHost(host: HostDataModel): CreateHostResult\n  updateHost(host: HostDataModel): UpdateHostResult\n  deleteHost(_id: String!): DeleteHostResult\n}\n\nschema {\n  query: RootQuery\n  mutation: RootMutation\n}";

/* babel-plugin-inline-import './post.graphql' */
const Post = "type Post {\n   _id: ObjectID!\n  title: String\n  description: String\n  content: String\n  date: Date\n  deletionDate: Date\n} \n\ninput PostDataModel {\n   _id: ObjectID\n  title: String\n  description: String\n  content: String\n  date: Date\n  deletionDate: Date\n}\n\ntype CreatePostResult {\n  OK: Boolean\n  error: String\n  payload: Post\n}\n\ntype UpdatePostResult {\n  OK: Boolean\n  error: String\n  payload: Post\n}\n\ntype DeletePostResult {\n  OK: Boolean\n  error: String\n  payload: [Post]\n}\n\n";

/* babel-plugin-inline-import './host.graphql' */
const Host = "type Host {\n  _id: ObjectID!\n  name: String\n  description: String\n  url: String\n  creationDate: Date\n  deletionDate: Date\n  # projects: [Project]\n} \n\ninput HostDataModel {\n   _id: ObjectID\n  name: String\n  description: String\n  url: String\n  creationDate: Date\n  deletionDate: Date\n}\n\ntype CreateHostResult {\n  OK: Boolean\n  error: String\n  payload: Host\n}\n\ntype UpdateHostResult {\n  OK: Boolean\n  error: String\n  payload: Host\n}\n\ntype DeleteHostResult {\n  OK: Boolean\n  error: String\n  payload: [Host]\n}\n\n";
var _default = [Root, Post, Host];
exports.default = _default;