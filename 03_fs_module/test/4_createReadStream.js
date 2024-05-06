const fs = require('fs')

const rs = fs.createReadStream('./text.txt')

rs.on('data', chunk => {
  console.log(chunk.toString())
  console.log(chunk.length)
})

rs.on('end', () => {
  console.log('success')
})