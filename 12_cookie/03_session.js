const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()

app.use(session({
  name: 'sid',                // クライアント側のセッションIDの名前を指定しています。
  secret: 'atguigu',          // セッションIDを暗号化するためのシークレットキーを設定しています。
  saveUninitialized: false,   // セッションが初期化されていない場合にセッションを保存するかどうかを設定しています。
  resave: true,               // 操作するたびに再度sessionを保存するかどうかを設定しています。
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/bilibili'
  }),                         // MongoDBをセッションストアとして使用しています。
  cookie: {
    httpOnly: true,           // クライアント側からのアクセスを禁止するかどうかを設定しています。
    maxAge: 1000 * 60 * 5     // セッションの有効期限を設定しています。
  }
}))

app.get('/', (req, res) => {
  res.send('home')
})

// Define a route for handling login requests
app.get('/login', (req, res) => {
  // Check if the username and password provided in the query parameters are 'admin'
  if (req.query.username === 'admin' && req.query.password === 'admin') {
    // Set the username and user id in the session
    req.session.username = 'admin'
    req.session.uid = '123456'
    // Send a success message if login is successful
    res.send('login success')
  } else {
    // Send a failure message if login is unsuccessful
    res.send('login fail')
  }
})

// Define route for handling '/cart' endpoint
app.get('/cart', (req, res) => {
  // Check if the username is stored in the session
  if (req.session.username) {
    // Send a welcome message including the username if it exists in the session
    res.send(`welcome ${req.session.username}, this is your cart.`)
  } else {
    // Send a response prompting the user to login if the username is not found in the session
    res.send('please login first.')
  }
})

// Define route for handling '/logout' endpoint
app.get('/logout', (req, res) => {
  // Destroy the session including username upon logout request
  req.session.destroy(() => {
    // Send a message confirming successful logout
    res.send('logout success')
  })
})

app.listen(3001, () => {
  console.log('server is running on http://localhost:3001')
})