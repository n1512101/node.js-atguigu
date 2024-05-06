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

    // await bookModel.updateOne({name: '红楼梦'}, {price: 9.9})
    await bookModel.updateMany({author: '余华'}, {is_hot: false})
    
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