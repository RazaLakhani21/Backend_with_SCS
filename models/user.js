// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // ❗in production: hash this
  phone: { type: String },
  country: { type: String },
  about: { type: String },
  updates: { type: Boolean, default: false }
});

const userModel = mongoose.model('user', userSchema)

module.exports = userModel