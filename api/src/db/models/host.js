import mongoose, { Schema } from 'mongoose';

const hosts = new Schema({
  _id: { type: Schema.Types.ObjectId },
  name: String,
  description: String,
  url: String,
  creationDate: Date,
  deletionDate: Date,
});

export default mongoose.model('hosts', hosts);
