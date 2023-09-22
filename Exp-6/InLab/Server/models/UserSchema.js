const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

console.log('In User schema')

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;