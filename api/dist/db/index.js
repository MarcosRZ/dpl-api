"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require("colors");

var _colors2 = _interopRequireDefault(_colors);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require("../config");

var _mongo = require("./config/mongo");

var _mongo2 = _interopRequireDefault(_mongo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
exports.default = {
  start: async () => {
    return new Promise((resolve, reject) => {
      const mongoUrl = _mongo2.default.MONGO_URL;

      _mongoose2.default.Promise = global.Promise;
      _mongoose2.default.set("debug", (0, _config.isProductionEnv)());

      try {
        _mongoose2.default.connect(mongoUrl);
      } catch (err) {
        _mongoose2.default.createConnection(mongoUrl);
      }

      _mongoose2.default.connection.once("open", () => {
        console.log(_colors2.default.green("🍃  Connected to MongoDB"));
        resolve(true);
      }).on("error", e => {
        reject(e);
      });
    });
  }
};