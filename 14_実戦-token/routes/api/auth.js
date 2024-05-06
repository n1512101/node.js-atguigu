const express = require('express')
const router = express.Router()
const userModel = require('../../models/userModel')
const md5 = require('md5')
const jwt = require('jsonwebtoken')

router.post('/login', async (req, res) => {
  let {username, password} = req.body
  
  try {
    let data = await userModel.findOne({username: username, password: md5(password)})
    if (!data) {
      return res.json({
        code: '2002',
        msg: 'ユーザー名とパスワードが違います。',
        data: null
      })
    }
    
    let token = jwt.sign({
      username: data.username,
      _id: data._id
    }, 'atguigu', {
      expiresIn: 60 * 60 * 24 * 7
    })

    res.json({
      code: '0000',
      msg: 'success login',
      data: token
    })

  } catch (error) {
    res.json({
      code: '2001',
      msg: 'fail to read the database.',
      data: null
    })
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