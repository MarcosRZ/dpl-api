"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProductionEnv = exports.ENVS = exports.API_MOUNTPOINT = exports.PORT = exports.GRAPHIQL_ENDPOINT = exports.GRAPHQL_ENDPOINT = void 0;
const GRAPHQL_ENDPOINT = "/graphql";
exports.GRAPHQL_ENDPOINT = GRAPHQL_ENDPOINT;
const GRAPHIQL_ENDPOINT = "/graphiql";
exports.GRAPHIQL_ENDPOINT = GRAPHIQL_ENDPOINT;
const PORT = 3001;
exports.PORT = PORT;
const API_MOUNTPOINT = "/api";
exports.API_MOUNTPOINT = API_MOUNTPOINT;
const ENVS = {
  DEV: "dev",
  PRODUCTION: "production"
};
exports.ENVS = ENVS;

const isProductionEnv = () => process.env.NODE_ENV === ENVS.PRODUCTION;

exports.isProductionEnv = isProductionEnv;