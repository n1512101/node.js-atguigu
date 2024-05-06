const http = require('http')
const fs = require('fs')
const path = require('path')

let mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  json: 'application/json'
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.end('<h1>405 method not allowed</h1>')
    return
  }
  let {pathname} = new URL(req.url, 'http://localhost:9000')

  let filePath = __dirname + pathname
  fs.readFile(filePath, (err, data) => {
    if(err) {
      res.setHeader('content-type', 'text/html; charset=utf-8')
      switch (err.code){
        case 'ENOENT':
          res.statusCode = 404
          res.end('<h1>404 NOT FOUND</h1>')
        case 'EPERM':
          res.statusCode = 403
          res.end('<h1>403 forbidden</h1>')
        default:
          res.statusCode = 500
          res.end('<h1>Internel server error</h1>')
      }
      return
    }
    let ext = path.extname(filePath).slice(1)
    let type = mimes[ext]
    if(type) {
      if (ext === 'html') {
        res.setHeader('content-type', type + ';charset=utf8')
      } else {
        res.setHeader('content-type', type)
      }
    } else {
      res.setHeader('content-type', 'application/octet-stream')
    }
    res.end(data)
  })

  // if (pathname === '/09_table.html') {
  //   let html = fs.readFileSync(__dirname + '/09_table.html')
  //   res.end(html)
  // } else if (pathname === '/09_table.css') {
  //   let css = fs.readFileSync(__dirname + '/09_table.css')
  //   res.end(css)
  // } else if (pathname === '/09_table.js') {
  //   let js = fs.readFileSync(__dirname + '/09_table.js')
  //   res.end(js)
  // } else {
  //   res.statusCode = 404
  //   res.end('404 not found')
  // }
})

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000')
})