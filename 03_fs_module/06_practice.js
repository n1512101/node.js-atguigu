const fs = require('fs')
const process = require('process')

// // 1.
// const data = fs.readFileSync('./text.txt')
// fs.writeFileSync('./text_copy.txt', data)
// console.log(process.memoryUsage())

// 2.
const rs = fs.createReadStream('./text.txt')
const ws = fs.createWriteStream('./text_copy2.txt')

// rs.on('data', chunk => {
//   ws.write(chunk)
// })

// rs.on('end', () => {
//   console.log(process.memoryUsage())
// })

rs.pipe(ws)