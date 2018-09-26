/* eslint-disable no-console */
import colors from 'colors';
import mongoose from 'mongoose';
import config from './config/mongo';

export default {
  start: () => {
    const mongoUrl = config.MONGO_URL;

    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);

    try {
      mongoose.connect(mongoUrl);
    } catch (err) {
      mongoose.createConnection(mongoUrl);
    }

    mongoose.connection
      .once('open', () => console.log(colors.green('🍃  Connected to MongoDB')))
      .on('error', (e) => {
        throw e;
      });
  },
};
