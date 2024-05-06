var express = require('express');
var router = express.Router();
const formidable = require('formidable');
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', (req, res) => {
  res.render('protrait')
})

router.post('/portrait', (req, res) => {
  // const form = formidable({multiples: true})
  const form = new formidable.IncomingForm({  // 古いバージョンの場合はこちらを使用
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: path.resolve(__dirname, '../public/images'),
    // 保持文件后缀
    keepExtensions: true
  }) 

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return
    }
    console.log(fields)
    console.log(files)

    // 写真を保存したパス
    res.send(files.protrait[0].newFilename)
  })
})

module.exports = router;
