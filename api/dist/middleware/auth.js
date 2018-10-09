"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressJwt = _interopRequireDefault(require("express-jwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _expressJwt.default)({
  secret: 'somesuperdupersecret',
  credentialsRequired: false
});

exports.default = _default;