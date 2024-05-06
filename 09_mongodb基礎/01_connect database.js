const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open', async () => {
  try {
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

    let createdBook = await bookModel.create({
      name: 'i love you',
      author: 'tom',
      style: 'novel',
      price: 19.9
    });

    console.log(createdBook);
    mongoose.disconnect()
  } catch (err) {
    console.error(err);
  }
});

mongoose.connection.on('error', () => {
  console.log('fail');
});

mongoose.connection.on('close', () => {
  console.log('over');
});


// setTimeout(() => {
//   mongoose.disconnect()
// }, 2000)