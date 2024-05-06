const express = require('express')

const app = express()

// publicディクトリー以下のすべてのファイルにアクセスできる
app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
  res.end('hello express')
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})