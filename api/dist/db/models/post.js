'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const posts = new _mongoose.Schema({
  slug: { type: String },
  title: { type: String },
  _title: { type: String },
  description: { type: String },
  content: { type: String },
  date: { type: Date },
  deletionDate: { type: Date }
});

exports.default = _mongoose2.default.model('posts', posts);