const express = require('express')

const app = express()

app.get('/response', (req, res) => {
  res.status(500)
  res.set('aaa','bbb')
  res.send('こんにちは。')
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})