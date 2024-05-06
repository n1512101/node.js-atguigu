const express = require('express')

const app = express()

// :id 任意のid
app.get('/:id.html', (req, res) => {
  console.log(req.params.id)
  res.setHeader('content-type', 'text/html; charset=utf-8')
  res.end('商品情報')
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})