const fs = require('fs')

// fs.readFile('./reader.txt', (err, data) => {
//   if(err) {
//     console.log('fail')
//     return
//   }
//   console.log(data.toString())
// })

let data = fs.readFileSync('./reader.txt')
console.log(data.toString())