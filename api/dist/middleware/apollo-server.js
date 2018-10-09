"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _graphqlTools = require("graphql-tools");

var _typeDefs = _interopRequireDefault(require("../graphql/schemas/typeDefs"));

var _resolvers = _interopRequireDefault(require("../graphql/resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default
});

var _default = (app, serverOptions = {}, middlewareOptions = {}) => {
  const apollo = new _apolloServerExpress.ApolloServer({
    typeDefs: _typeDefs.default,
    resolvers: _resolvers.default,
    ...serverOptions
  }); // Apollo Server

  apollo.applyMiddleware({
    app,
    ...middlewareOptions
  }); // Configure subscriptions

  if (serverOptions.subscriptions) {
    apollo.installSubscriptionHandlers(app);
  }

  return apollo;
};

exports.default = _default;