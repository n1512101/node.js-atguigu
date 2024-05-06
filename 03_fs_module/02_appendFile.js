const fs = require('fs')

// fs.appendFile('./text.txt','\npython is fun, too.', err => {
//   if(err) {
//     console.log('fail')
//     return
//   }
//   console.log('success')
// })

// fs.appendFileSync('./text.txt', '\njavascript is fun, too.')

fs.writeFile('./text.txt', '\ni love you', {flag: 'a'}, err => {
  if(err){
    console.log('fail')
    return
  }
  console.log('success')
})