const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

function recordMiddleware(req, res, next) {
  let {url, ip} = req
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\n`)
  next()
}

app.use(recordMiddleware)

app.get('/home', (req, res) => {
  // let {url, ip} = req
  // // console.log(url, ip)
  // fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\n`)
  res.send('front')
})

app.get('/admin', (req, res) => {
  res.send('back')
})

app.all('*', (req, res) => {
  res.send('<h1> 404 not found </h1>')
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})