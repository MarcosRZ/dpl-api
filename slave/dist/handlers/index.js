"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "deployHandler", {
  enumerable: true,
  get: function () {
    return _deploy.default;
  }
});
Object.defineProperty(exports, "helloHandler", {
  enumerable: true,
  get: function () {
    return _hello.default;
  }
});
Object.defineProperty(exports, "runHandler", {
  enumerable: true,
  get: function () {
    return _run.default;
  }
});

var _deploy = _interopRequireDefault(require("./deploy"));

var _hello = _interopRequireDefault(require("./hello"));

var _run = _interopRequireDefault(require("./run"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }