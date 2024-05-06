const fs = require('fs')

// // ファイル名の01を1に変換する
// const files = fs.readdirSync('./test')
// files.forEach(item => {
//   let data = item.split('_')
//   let [num, name] = data
//   if(num < 10) {
//     num = Number(num)
//   }
//   let newName = num + '_' + name
//   fs.renameSync(`./test/${item}`, `./test/${newName}`)
// })

// // ファイル名の1を01に変換する
// const files = fs.readdirSync('./test')
// files.forEach(item => {
//   let data = item.split('_')
//   let [num, name] = data
//   if(Number(num) < 10){
//     num = '0' + num
//   }
//   let newName = num + '_' + name
//   fs.renameSync(`./test/${item}`, `./test/${newName}`)
// })

// ファイルが欠如した場合自動で番号を繰り上げる
const files = fs.readdirSync('./test')
for(i=0; i<files.length; i++) {
  data = files[i].split('_')
  let [num, name] = data
  let newName = (i+1) + '_' + name
  fs.renameSync(`./test/${files[i]}`, `./test/${newName}`)
}