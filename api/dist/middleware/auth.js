'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _expressJwt2.default)({
  secret: 'somesuperdupersecret',
  credentialsRequired: false
});