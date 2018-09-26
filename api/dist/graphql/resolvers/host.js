'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _host = require('../../db/models/host');

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function success(payload) {
  return { OK: true, payload };
}

function error(msg) {
  return { OK: false, error: msg || 'No se ha podido completar la operación.' };
}

exports.default = {
  query: {
    hosts: async (obj, { skip, limit }, ctx) => {
      console.log('ctx: ', ctx);

      const skipVal = skip || 0;
      const limitVal = limit || 0;

      const hosts = await _host2.default.find({ deletionDate: null }).sort({ date: -1 }).skip(skipVal).limit(limitVal).exec();

      return hosts;
    }
  },
  mutation: {
    createHost: async (obj, args) => {
      const { host } = args;

      if (!host) throw new Error("There's no host to create");

      const dbHost = new _host2.default(host);

      const payload = await dbHost.save();

      return success(payload);
    },
    updateHost: async (obj, args) => {
      const { host } = args;

      const dbHost = await _host2.default.findOne({ _id: host._id }).exec();

      console.log('DB HOST: ', dbHost);

      if (!dbHost) return error('No se ha encontrado el documento en BD');

      const res = await _host2.default.updateOne({ _id: host._id }, { $set: host }).exec();

      return res.ok === 1 ? success(host) : error(host);
    },

    deleteHost: async (obj, args) => {
      const { _id } = args;

      const dbHost = await _host2.default.findOne({ _id }).exec();

      if (!dbHost) return error('No se ha encontrado el documento en BD');

      const res = await _host2.default.updateOne({ _id }, { $set: { deletionDate: new Date() } }).exec();

      const hosts = _host2.default.find({ deletionDate: null });

      console.log(res);

      return res.ok === 1 ? success(hosts) : error();
    }
  },
  resolvers: {}
};