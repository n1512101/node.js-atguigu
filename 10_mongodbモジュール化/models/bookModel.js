const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    default: 'tom'
  },
  style: {
    type: String,
    enum: ['interesting', 'novel', 'movie', 'song']
  },
  price: Number
});

let bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel