const express = require('express')
const router = express.Router()
const userModel = require('../../models/userModel')
const md5 = require('md5')

router.get('/reg', (req, res) => {
  res.render('auth/reg')
})

router.post('/reg', async (req, res) => {
  try {
    await userModel.create({...req.body, password: md5(req.body.password)})
  } catch (error) {
    res.status(500).send('fail to register')
    return
  }
  res.render('success', { msg: 'success to register', url: '/login' })
})

router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', async (req, res) => {
  let {username, password} = req.body
  
  try {
    let data = await userModel.findOne({username: username, password: md5(password)})
    if (!data) {
      return res.send('ログインIDとパスワードが間違っています。') 
    }
    req.session.username = data.username
    req.session._id = data._id
  } catch (error) {
    res.status(500).send('fail to read data.')
    return
  }

  res.render('success', {msg: 'success login', url: '/account'})
})

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.render('success', {msg: 'success logout', url: '/login'})
  })
})

module.exports = router