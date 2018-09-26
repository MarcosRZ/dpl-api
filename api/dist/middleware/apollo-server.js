"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloServerExpress = require("apollo-server-express");

var _graphqlTools = require("graphql-tools");

var _typeDefs = require("../graphql/schemas/typeDefs");

var _typeDefs2 = _interopRequireDefault(_typeDefs);

var _resolvers = require("../graphql/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _typeDefs2.default,
  resolvers: _resolvers2.default
});

exports.default = (app, serverOptions = {}, middlewareOptions = {}) => {
  const apollo = new _apolloServerExpress.ApolloServer(Object.assign({ typeDefs: _typeDefs2.default, resolvers: _resolvers2.default }, serverOptions));

  // Apollo Server
  apollo.applyMiddleware(Object.assign({ app }, middlewareOptions));

  // Configure subscriptions
  if (serverOptions.subscriptions) {
    apollo.installSubscriptionHandlers(app);
  }

  return apollo;
};