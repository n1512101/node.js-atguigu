const db = require('./db/db')
const movieModel = require('./models/movieModel')

db(async () => {
  let createMovie = await movieModel.create({
    title: 'tom and jerry',
    director: 'jack'
  })

  console.log(createMovie)
})