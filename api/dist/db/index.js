'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongo = require('./config/mongo');

var _mongo2 = _interopRequireDefault(_mongo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
exports.default = {
  start: () => {
    const mongoUrl = _mongo2.default.MONGO_URL_ATLAS;

    _mongoose2.default.Promise = global.Promise;
    _mongoose2.default.set('debug', true);

    try {
      _mongoose2.default.connect(mongoUrl);
    } catch (err) {
      _mongoose2.default.createConnection(mongoUrl);
    }

    _mongoose2.default.connection.once('open', () => console.log('Connected to MongoDB')).on('error', e => {
      throw e;
    });
  }
};