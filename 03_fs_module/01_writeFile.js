const fs = require('fs')

// // 非同期
// fs.writeFile('./text.txt', 'node.js is fun', err => {
//   if(err) {
//     console.log('failed')
//     return
//   }
//   console.log('success')
// })

// 同期
fs.writeFileSync('./data.txt', 'test')