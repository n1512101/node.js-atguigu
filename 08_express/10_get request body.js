const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/login', (req,res) => {
  res.sendFile(__dirname + '/10_form.html')
})

app.post('/login', urlencodedParser, (req, res) => {
  console.log(req.body)
  res.send('get user infomation')
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})