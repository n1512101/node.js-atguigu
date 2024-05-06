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
      price: Number,
      is_hot: Boolean
    });

    let bookModel = mongoose.model('novels', bookSchema);

    // let bookFind = await bookModel.find().select({name: 1, author: 1}).exec()
    // let bookFind = await bookModel.find().select({name: 1, author: 1, _id: 0}).exec()

    // let bookFind = await bookModel.find().select({name:1, price:1, _id:0}).sort({price: 1}).exec()

    // let bookFind = await bookModel.find().select({name:1, price:1, _id:0}).sort({price: -1}).limit(3).exec()

    let bookFind = await bookModel.find().select({name:1, price:1, _id:0}).sort({price: -1}).skip(3).limit(3).exec()

    console.log(bookFind)
    
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