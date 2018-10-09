"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_PORT = exports.API_BASE = exports.VERSION = exports.APP_NAME = void 0;
const APP_NAME = 'DPL-API';
exports.APP_NAME = APP_NAME;
const VERSION = '0.1';
exports.VERSION = VERSION;
const API_BASE = '/dpl-api'; // -> http://localhost:8080/dpl-api

exports.API_BASE = API_BASE;
const DEFAULT_PORT = 8080;
exports.DEFAULT_PORT = DEFAULT_PORT;
var _default = {
  APP_NAME,
  VERSION,
  DEFAULT_PORT,
  API_BASE
};
exports.default = _default;