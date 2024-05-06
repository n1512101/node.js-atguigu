const jwt = require('jsonwebtoken')

// 创建token
// let token = jwt.sign({
//   'username': 'zhangsan'
// }, 'atguigu', {
//   expiresIn: 60
// })

// console.log(token)


// 校验token
let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNzE0ODIxMzM1LCJleHAiOjE3MTQ4MjEzOTV9.HIgJzUz4hVp0ykRPH2QwePdKuvlXR3ZgTFqysT5w8GY'

jwt.verify(t, 'atguigu', (err,data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})