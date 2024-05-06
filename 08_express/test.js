const express = require('express');
const basicAuth = require('basic-auth');
const app = express();

// ユーザー名とパスワードの組み合わせ
const users = {
  'admin': 'password123'
};

// ベーシック認証のミドルウェア
function basicAuthMiddleware(req, res, next) {
  const credentials = basicAuth(req);

  if (!credentials || !users[credentials.name] || users[credentials.name] !== credentials.pass) {
    res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
    return res.status(401).send('Authentication required.');
  }

  next();
}

// ベーシック認証を適用するルート
app.get('/admin', basicAuthMiddleware, (req, res) => {
  res.send('You are authenticated as admin.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
