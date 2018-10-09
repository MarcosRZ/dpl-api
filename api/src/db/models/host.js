import mongoose from 'mongoose';

const hosts = mongoose.Schema({
  name: String,
  description: String,
  url: String,
  creationDate: Date,
  deletionDate: Date,
});

export default mongoose.model('hosts', hosts);
