"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const GRAPHQL_ENDPOINT = exports.GRAPHQL_ENDPOINT = "/graphql";
const GRAPHIQL_ENDPOINT = exports.GRAPHIQL_ENDPOINT = "/graphiql";
const PORT = exports.PORT = 3001;
const API_MOUNTPOINT = exports.API_MOUNTPOINT = "/api";
const ENVS = exports.ENVS = {
  DEV: "dev",
  PRODUCTION: "production"
};

const isProductionEnv = exports.isProductionEnv = () => process.env.NODE_ENV === ENVS.PRODUCTION;