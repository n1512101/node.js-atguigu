const express = require('express')
const path = require('path')

const app = express()

// 设置模板引擎为ejs
app.set('view engine', 'ejs')

// ejsファイルを格納するディクトリーを指定する
app.set('views', path.resolve(__dirname, './views'))

app.get('/home', (req, res) => {
  let title = 'atguigu'
  res.render('home', {title: title})
})

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})