module.exports = function(success, error) {
  if (typeof error !== 'function'){
    error = () => {
      console.log('fail to connect')
    }
  }

  const mongoose = require('mongoose');
  const {DBHOST, DBPORT, DBNAME} = require('../config/config')

  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  mongoose.connection.once('open', () => {
    try {
      success()
    } catch (err) {
      error()
    }
  });

  mongoose.connection.on('close', () => {
    console.log('over');
  });
}