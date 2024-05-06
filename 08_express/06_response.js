const express = require('express')

const app = express()

app.get('/other', (req, res) => {
  // res.redirect('http://atguigu.com')
  // res.download(__dirname + '/package.json')
  // res.json({
  //   name: 'Tom',
  //   age: 22
  // })
  res.sendFile(__dirname + '/01_home.html')
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})