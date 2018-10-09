"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _host = _interopRequireDefault(require("../../db/models/host"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function success(payload) {
  return {
    OK: true,
    payload
  };
}

function error(msg) {
  return {
    OK: false,
    error: msg || 'No se ha podido completar la operación.'
  };
}

var _default = {
  query: {
    hosts: async (obj, {
      skip,
      limit
    }) => {
      const skipVal = skip || 0;
      const limitVal = limit || 0;
      const hosts = await _host.default.find({
        deletionDate: null
      }).sort({
        date: -1
      }).skip(skipVal).limit(limitVal).exec();
      console.log(hosts);
      return hosts;
    }
  },
  mutation: {
    createHost: async (obj, args) => {
      const {
        host
      } = args;
      if (!host) throw new Error("There's no host to create");
      const dbHost = new _host.default(host);
      const payload = await dbHost.save();
      return success(payload);
    },
    updateHost: async (obj, args) => {
      const {
        host
      } = args;
      const dbHost = await _host.default.findOne({
        _id: host._id
      }).exec();
      console.log('DB HOST: ', dbHost);
      if (!dbHost) return error('No se ha encontrado el documento en BD');
      const res = await _host.default.updateOne({
        _id: host._id
      }, {
        $set: host
      }).exec();
      return res.ok === 1 ? success(host) : error(host);
    },
    deleteHost: async (obj, args) => {
      const {
        _id
      } = args;
      const dbHost = await _host.default.findOne({
        _id
      }).exec();
      if (!dbHost) return error('No se ha encontrado el documento en BD');
      const res = await _host.default.updateOne({
        _id
      }, {
        $set: {
          deletionDate: new Date()
        }
      }).exec();

      const hosts = _host.default.find({
        deletionDate: null
      });

      console.log(res);
      return res.ok === 1 ? success(hosts) : error();
    }
  },
  resolvers: {}
};
exports.default = _default;