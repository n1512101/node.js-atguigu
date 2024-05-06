const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  username: String,
  password: String
})

let userModel = mongoose.model('user', userSchema)

module.exports = userModel