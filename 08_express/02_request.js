const express = require('express')

const app = express()

app.get('/request', (req, res) => {
  // console.log(req.method)
  // console.log(req.url)
  // console.log(req.httpVersion)
  console.log(req.headers)

  // console.log(req.path)
  // console.log(req.query)
  // console.log(req.ip)
  console.log(req.get('host'))
  res.end('hello, express!')
})

app.get('/', (req, res) => {
  res.end('home')
})

app.post('/login', (req, res) => {
  res.end('login')
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})