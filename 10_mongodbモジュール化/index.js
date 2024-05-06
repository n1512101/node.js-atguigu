const db = require('./db/db')
const mongoose = require('mongoose')
const bookModel = require('./models/bookModel')

db(async () => {
  let createdBook = await bookModel.create({
    name: 'i love you',
    author: 'tom',
    style: 'novel',
    price: 19.9
  });
  
  console.log(createdBook);
  mongoose.disconnect()
}, () => {
  console.log('fail to connect')
})


