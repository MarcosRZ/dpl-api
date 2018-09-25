/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './config/mongo';

export default {
  start: () => {
    const mongoUrl = config.MONGO_URL_ATLAS;

    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);

    try {
      mongoose.connect(mongoUrl);
    } catch (err) {
      mongoose.createConnection(mongoUrl);
    }

    mongoose.connection
      .once('open', () => console.log('Connected to MongoDB'))
      .on('error', (e) => {
        throw e;
      });
  },
};
