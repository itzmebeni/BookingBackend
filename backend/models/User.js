const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, sparse: true }, // optional, can be added later
  name: { type: String }
});

module.exports = mongoose.model('User', UserSchema);
