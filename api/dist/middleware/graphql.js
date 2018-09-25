'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloServerExpress = require('apollo-server-express');

var _graphqlTools = require('graphql-tools');

var _typeDefs = require('../graphql/schemas/typeDefs');

var _typeDefs2 = _interopRequireDefault(_typeDefs);

var _resolvers = require('../graphql/resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _typeDefs2.default,
  resolvers: _resolvers2.default
});

exports.default = app => {
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