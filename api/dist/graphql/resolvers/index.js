"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _post = _interopRequireDefault(require("./post"));

var _date = _interopRequireDefault(require("./date"));

var _objectid = _interopRequireDefault(require("./objectid"));

var _host = _interopRequireDefault(require("./host"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  RootQuery: { ..._post.default.query,
    ..._host.default.query
  },
  RootMutation: { ..._post.default.mutation,
    ..._host.default.mutation
  },
  ..._date.default,
  ..._objectid.default,
  ..._post.default.resolvers,
  ..._host.default.resolvers
};
exports.default = _default;