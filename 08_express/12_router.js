const express = require('express')
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

const app = express()

app.use(homeRouter)
app.use(adminRouter)

app.all('*', (req, res) => {
  res.send('<h1> 404 not found </h1>')
})

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})