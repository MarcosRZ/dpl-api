"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hosts = _mongoose.default.Schema({
  name: String,
  description: String,
  url: String,
  creationDate: Date,
  deletionDate: Date
});

var _default = _mongoose.default.model('hosts', hosts);

exports.default = _default;