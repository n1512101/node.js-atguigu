const express = require('express')

const router = express.Router()

router.get('/admin', (req, res) => {
  res.send('back page')
})

router.get('/setting', (req, res) => {
  res.send('setting page')
})

module.exports = router