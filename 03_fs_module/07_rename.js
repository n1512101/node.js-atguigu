const fs = require('fs')

fs.rename('./reader.txt', './Reader.txt', err=>{
  if(err) {
    console.log('error')
    return
  }
  console.log('success')
})

// パスを変更すればファイルの移動もできる。