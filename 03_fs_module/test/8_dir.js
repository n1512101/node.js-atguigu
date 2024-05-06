const fs = require('fs')

// fs.mkdir('./html', err => {
//   if(err) {
//     console.log('fail')
//     return
//   }
//   console.log('success')
// })

// fs.mkdir('./a/b/c', {recursive: true},err=>{
//   if(err){
//     console.log('fail')
//     return
//   }
//   console.log('success')
// })

// fs.readdir('./', (err, data) => {
//   if(err) {
//     console.log('fail')
//     return
//   }
//   console.log(data)
// })

// fs.rmdir('./html', err => {
//   if(err){
//     console.log('fail')
//     return
//   }
//   console.log('success')
// })

// fs.rmdir('./a', {recursive: true},err =>{
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log('success')
// })

fs.rm('./a', {recursive: true},err =>{
  if(err) {
    console.log(err)
    return
  }
  console.log('success')
})