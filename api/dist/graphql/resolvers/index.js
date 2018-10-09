'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

var _host = require('./host');

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({
  RootQuery: Object.assign({}, _post2.default.query, _host2.default.query),
  RootMutation: Object.assign({}, _post2.default.mutation, _host2.default.mutation)
}, _date2.default, _post2.default.resolvers, _host2.default.resolvers);