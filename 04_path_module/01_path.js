const path = require('path')

// console.log(__dirname + '/index.html')
// console.log(path.resolve(__dirname, './index.html'))
// console.log(path.resolve(__dirname, 'index.html'))


// console.log(path.sep)

// console.log(__filename)
let str = 'C:/Users/n1512/Desktop/node.js/04_path_module/01_path.js'
// console.log(path.parse(str))

console.log(path.basename(str))
console.log(path.dirname(str))
console.log(path.extname(str))