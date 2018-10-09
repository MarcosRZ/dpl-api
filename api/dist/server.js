"use strict";

var _colors = _interopRequireDefault(require("colors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _apolloServer = _interopRequireDefault(require("./middleware/apollo-server"));

var _auth = _interopRequireDefault(require("./middleware/auth"));

var _config = require("./config");

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import graphqlMiddleware from './middleware/graphql';
console.log(_colors.default.blue(`🏭  Enviroment is [${_colors.default.yellow(process.env.NODE_ENV)}]`));

const init = async () => {
  try {
    // Connect with DB. Await connection...
    await _db.default.start({
      debug: !(0, _config.isProductionEnv)()
    }); // Configure Express HTTP Server

    const app = (0, _express.default)();
    app.use(_bodyParser.default.json({
      limit: "1000mb"
    }));
    app.use(_bodyParser.default.urlencoded({
      extended: true
    }));
    app.use(_auth.default); // Apply Apollo Server middleware

    const apolloServer = (0, _apolloServer.default)(app, {
      subscriptions: true
    }, {
      path: _config.API_MOUNTPOINT
    });
    const API_PATH = `localhost:${_config.PORT}${apolloServer.graphqlPath}`; // Turn on HTTP Server.

    app.listen({
      port: _config.PORT
    }, err => {
      if (err) throw err;
      console.log(_colors.default.blue(`🛰️  API listening at [${_colors.default.yellow(API_PATH)}]`));
    });
  } catch (err) {
    console.error(_colors.default.red(err));
  }
};

init();