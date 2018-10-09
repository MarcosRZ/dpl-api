"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _language = require("graphql/language");

var _mongodb = require("mongodb");

var _default = {
  ObjectID: new _graphql.GraphQLScalarType({
    name: 'ObjectID',
    description: 'The `ObjectID` scalar type represents a [`BSON`](https://en.wikipedia.org/wiki/BSON) ID commonly used in `mongodb`.',

    serialize(_id) {
      if (_id instanceof _mongodb.ObjectID) {
        return _id.toHexString();
      }

      return _id;
    },

    parseValue(_id) {
      if (typeof _id === 'string') {
        return _mongodb.ObjectID.createFromHexString(_id);
      }

      throw new Error(`${typeof _id} not convertible to ObjectID`);
    },

    parseLiteral(ast) {
      if (ast.kind === _language.Kind.STRING) {
        return _mongodb.ObjectID.createFromHexString(ast.value);
      }

      throw new Error(`${ast.kind} not convertible to ObjectID`);
    }

  })
};
exports.default = _default;