const express = require('express')

const app = express()

app.get('/home', (req, res) => {
  res.end('hello, express!')
})

app.get('/', (req, res) => {
  res.end('home')
})

app.post('/login', (req, res) => {
  res.end('login')
})

// get, postなどなんでもアクセスできる
app.all('/test', (req, res) => {
  res.end('test')
})

app.all('*', (req, res) => {
  res.end('404 not Found')
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001/home')
})