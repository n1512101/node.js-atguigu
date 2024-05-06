const http = require('http')

const server = http.createServer((request, response) => {
  // http://localhost:9000/search?keyword=atguigu&num=1の場合
  let url = new URL(`http://www.xxx.com${request.url}`)
  console.log(url)
  console.log(url.pathname)
  console.log(url.searchParams.get('keyword'))
  response.end('url')
})

server.listen(9000, () => {
  console.log('Server is running at http://localhost:9000')
})