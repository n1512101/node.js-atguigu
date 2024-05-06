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

    // let bookFind = await bookModel.findOne({name: '狂飙'})
    // let bookFind = await bookModel.findById('662a5b8744f7beb332f11c7a')
    // let bookFind = await bookModel.find({author: '余华'})
    let bookFind = await bookModel.find()

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