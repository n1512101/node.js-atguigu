const fs = require('fs')

// 创建写入流
const ws = fs.createWriteStream('./reader.txt')

ws.write('It is a interesting book.')

ws.close()