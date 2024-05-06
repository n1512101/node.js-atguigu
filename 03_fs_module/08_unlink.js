const fs = require('fs')

// fs.unlink('./text_copy2.txt', err=>{
//   if(err){
//     console.log('fail')
//     return
//   }
//   console.log('success delete')
// })

fs.rm('./text_copy.txt', err => {
  if (err) {
    console.log('fail')
    return
  }
  console.log('success delete')
})