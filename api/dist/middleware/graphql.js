"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _graphqlTools = require("graphql-tools");

var _typeDefs = _interopRequireDefault(require("../graphql/schemas/typeDefs"));

var _resolvers = _interopRequireDefault(require("../graphql/resolvers"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default
});

var _default = app => {
  app.use(`${_config.API_MOUNTPOINT}${_config.GRAPHIQL_ENDPOINT}`, (0, _apolloServerExpress.graphiqlExpress)({
    endpointURL: `${_config.API_MOUNTPOINT}${_config.GRAPHQL_ENDPOINT}`
  }));
  app.use(`${_config.API_MOUNTPOINT}${_config.GRAPHQL_ENDPOINT}`, (0, _apolloServerExpress.graphqlExpress)(req => ({
    schema,
    context: {
      user: req.user,
      sessionId: req.sessionId,
      ip: req.ip
    }
  })));
};

exports.default = _default;