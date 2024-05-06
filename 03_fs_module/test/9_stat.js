const fs = require('fs')

fs.stat('./data.txt', (err, data) => {
  if(err) {
    console.log('fail')
    return
  }
  // console.log(data)
  console.log(data.isFile())
  console.log(data.isDirectory())
})