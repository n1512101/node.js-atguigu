// ejs: htmlとサーバjavascriptを結びつける役割
const ejs = require('ejs')
const fs = require('fs')

let china = '中国'
let weather = 'today is a nice day.'

let str = fs.readFileSync('./01_html.html').toString()

// let result = ejs.render(str, {china: china, weather: weather})
let result = ejs.render(str, {china, weather})

console.log(result)