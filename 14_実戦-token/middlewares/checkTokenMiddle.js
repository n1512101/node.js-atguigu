const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  let token = req.get('token')
  if(!token) {
    return res.json({
      code: '2003',
      msg: 'no token',
      data: null
    })
  }
  jwt.verify(token, 'atguigu', (err, data) => {
    if(err) {
      return res.json({
        code: '2004', 
        msg: 'fail',
        data: null
      })
    }
    req.user = data
    next()
  })
}