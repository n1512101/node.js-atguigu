const ejs = require('ejs')
const fs = require('fs')

let isLogin = false

let html = fs.readFileSync('./03_home.html').toString()
let result = ejs.render(html, {isLogin: isLogin})

console.log(result)