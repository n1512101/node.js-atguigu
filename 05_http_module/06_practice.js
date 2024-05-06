const http = require('http')

const server = http.createServer((req, res) => {
  let {method} = req
  let {pathname} = new URL(req.url, 'http://localhost:9000')
  // console.log(method, pathname)
  res.setHeader('content-type', 'text/html; charset=utf8')
  if (method === 'GET' && pathname === '/login') {
    res.end('login page...')
  } else if (method === 'GET' && pathname === '/reg') {
    res.end('register page...')
  } else {
    res.end('404 not found')
  }
})

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000')
})