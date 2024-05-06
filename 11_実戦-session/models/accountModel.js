const mongoose = require('mongoose')

let accountSchema = new mongoose.Schema({
  time: Date,
  type: {
    type: Number,
    default: -1
  },
  account: {
    type: Number,
    required: true
  },
  remarks: {
    type: String
  },
  title: {
    type: String,
    required: true
  }
})

let accountModel = mongoose.model('account', accountSchema)

module.exports = accountModel