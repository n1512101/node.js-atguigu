const http = require('http')

const server = http.createServer((req, res) => {
  // res.statusCode = 203
  // res.statusMessage = 'i love you'
  res.setHeader('content-type', 'text/html; charset=utf-8')
  res.write('love')
  res.end()
})

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000')
})