import mongoose, { Schema } from 'mongoose';

const hosts = new Schema({
  name: String,
  description: String,
  url: String,
  creationDate: Date,
  deletionDate: Date,
});

export default mongoose.model('hosts', hosts);
