const http = require('http')

const server = http.createServer((request, response) => {
  // console.log(request.method)
  // console.log(request.url)
  // console.log(request.httpVersion)
  // console.log(request.headers)
  console.log(request.headers.host)

  response.end('http')
})

server.listen(9000, () => {
  console.log('Server is running at http://localhost:9000')
})