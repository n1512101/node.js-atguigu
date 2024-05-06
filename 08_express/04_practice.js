const express = require('express')
const {singers} = require('./04_singer.json')


const app = express()

app.get('/singer/:id.html', (req, res) => {
  let {id} = req.params
  let result = singers.find(item => item.id === Number(id))

  if (!result) {
    res.statusCode = 404
    res.end('<h1>404 NOT FOUND</h1>')
    return
  }

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${result.singer_name}</h2>
      <img src='${result.singer_pic}' />
    </body>
    </html>`)
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})