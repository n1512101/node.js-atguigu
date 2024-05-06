const express = require('express')

const app = express()

app.use((req, res, next) => {
  let referer = req.get('referer')
  if (referer) {
    let url = new URL(referer)
    let hostname = url.hostname
    if (hostname !== '127.0.0.1') {
      res.status(404).send('<h1>404 not found</h1>')
      return
    }
  }
  next()
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
  console.log('server is running at http://127.0.0.1:3000')
})