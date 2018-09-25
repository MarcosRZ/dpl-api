'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _post = require('../../db/models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function success(payload) {
  return { OK: true, payload };
}

function error(msg) {
  return { OK: false, error: msg || 'No se ha podido completar la operación.' };
}

exports.default = {
  query: {
    posts: async (obj, { skip, limit }, ctx) => {
      console.log('ctx: ', ctx);

      const skipVal = skip || 0;
      const limitVal = limit || 0;

      const posts = await _post2.default.find({ deletionDate: null }).sort({ date: -1 }).skip(skipVal).limit(limitVal).exec();

      return posts;
    }
  },
  mutation: {
    createPost: async (obj, args) => {
      const { post } = args;

      if (!post) throw new Error("There's no post to create");

      if (!post.date) post.date = new Date();

      const dbPost = new _post2.default(post);

      const payload = await dbPost.save();

      return success(payload);
    },
    updatePost: async (obj, args) => {
      const { post } = args;

      const dbPost = await _post2.default.findOne({ _id: post._id }).exec();

      console.log('DB POST: ', dbPost);

      if (!dbPost) return error('No se ha encontrado el documento en BD');

      const res = await _post2.default.updateOne({ _id: post._id }, { $set: post }).exec();

      return res.ok === 1 ? success(post) : error(post);
    },

    deletePost: async (obj, args) => {
      const { _id } = args;

      const dbPost = await _post2.default.findOne({ _id }).exec();

      if (!dbPost) return error('No se ha encontrado el documento en BD');

      const res = await _post2.default.updateOne({ _id }, { $set: { deletionDate: new Date() } }).exec();

      const posts = _post2.default.find({ deletionDate: null });

      console.log(res);

      return res.ok === 1 ? success(posts) : error();
    }
  },
  resolvers: {}
};