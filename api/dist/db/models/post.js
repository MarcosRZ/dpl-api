"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const posts = _mongoose.default.Schema({
  slug: {
    type: String
  },
  title: {
    type: String
  },
  _title: {
    type: String
  },
  description: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: Date
  },
  deletionDate: {
    type: Date
  }
});

var _default = _mongoose.default.model('posts', posts);

exports.default = _default;