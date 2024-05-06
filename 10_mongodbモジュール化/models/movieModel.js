const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  director: String
})

const movieModel = mongoose.model('movies', movieSchema)

module.exports = movieModel