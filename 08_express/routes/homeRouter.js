const express = require('express')

const router = express.Router()

router.get('/home', (req, res) => {
  res.send('front page')
})

router.get('/search', (req, res) => {
  res.send('search page')
})

module.exports = router