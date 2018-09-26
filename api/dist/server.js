"use strict";

var _colors = require("colors");

var _colors2 = _interopRequireDefault(_colors);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _apolloServer = require("./middleware/apollo-server");

var _apolloServer2 = _interopRequireDefault(_apolloServer);

var _auth = require("./middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

var _config = require("./config");

var _db = require("./db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import graphqlMiddleware from './middleware/graphql';
_db2.default.start();

const app = (0, _express2.default)();

app.use(_bodyParser2.default.json({ limit: "1000mb" }));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_auth2.default);

const apolloServer = (0, _apolloServer2.default)(app, { subscriptions: true }, { path: "/api" });

app.listen({ port: _config.PORT }, err => {
  if (err) {
    console.error(_colors2.default.red(err));
  } else console.log(_colors2.default.green(`🛰️  API listening at localhost:${_config.PORT}${apolloServer.graphqlPath}`));
});