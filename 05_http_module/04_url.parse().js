const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
  // console.log(request.url)
  const res = url.parse(request.url, true)
  console.log(res)
  response.end('url')
})

server.listen(9000, () => {
  console.log('Server is running at http://localhost:9000')
})