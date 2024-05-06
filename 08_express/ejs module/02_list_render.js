const ejs = require('ejs')
const fs = require('fs')

const name = ['jerry', 'tom', 'jack', 'bob']

let html = fs.readFileSync('./02_html.html').toString()
let result = ejs.render(html, {name: name})

console.log(result)