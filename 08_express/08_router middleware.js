const express = require('express')

const app = express()

app.get('/home', (req, res) => {
  res.send('front page')
})

let checkCodeMiddleware = (req, res, next) => {
  if (req.query.code === '521') {
    next()
  } else {
    res.send('wrong keyword')
  }
}

app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('back page')
})

app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('setting page')
})

app.all('*', (req, res) => {
  res.send('<h1> 404 not found </h1>')
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})