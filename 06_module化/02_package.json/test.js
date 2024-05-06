// moduleディクトリー内のpackage.jsonのmain属性のファイルが導入される
// なければindex.js  index.jsonが導入される
const m = require('./module')

console.log(m)