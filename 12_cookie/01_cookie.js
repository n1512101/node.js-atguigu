const express = require('express')

const app = express()

app.get('/set-cookie', (req, res) => {
  // res.cookie('name', 'zhangsan')   // ブラウザー閉じたら消える
  res.cookie('name', 'lisi', {maxAge: 60 * 1000})   // 1分間だけ有効
  res.cookie('theme', 'blue')
  res.send('Hello World!')
})

app.get('/remove-cookie', (req, res) => {
  res.clearCookie('theme')       // 指定したcookieを削除
  res.send('Cookie removed!')
})

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})