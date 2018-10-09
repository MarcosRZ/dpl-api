"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("colors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config");

var _mongo = _interopRequireDefault(require("./config/mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var _default = {
  start: async ({
    debug
  } = {}) => {
    return new Promise((resolve, reject) => {
      const mongoUrl = _mongo.default.MONGO_URL;
      _mongoose.default.Promise = global.Promise;

      _mongoose.default.set("debug", debug);

      try {
        _mongoose.default.connect(mongoUrl);
      } catch (err) {
        _mongoose.default.createConnection(mongoUrl);
      }

      _mongoose.default.connection.once("open", () => {
        console.log(_colors.default.blue("🍃  Connected to MongoDB"));
        resolve(true);
      }).on("error", e => {
        reject(e);
      });
    });
  }
};
exports.default = _default;