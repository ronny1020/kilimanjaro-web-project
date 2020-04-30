module.exports = app => {
  //   const image = require('../controllers/imageController.js')
  var router = require('express').Router()
  var multer = require('multer')
  var upload = multer({ dest: 'public/avatar' })

  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/avatar')
    },
    filename: function(req, file, cb) {
      cb(null, req.params.customerID)
    },
  })
  var upload = multer({ storage: storage })

  //路由: 上傳圖片
  //avatar: 與上傳欄位的name相符
  //filefilter (未完成)
  router.post('/:customerID', upload.single('avatar'), function(
    req,
    res,
    next
  ) {
    req.file.newName = req.params.customerID
    try {
      res.send(req.file)
    } catch (err) {
      res.send(400)
    }
  })

  //路由: 載入圖片
  router.get('/:customerID', function(req, res, next) {
    //無視副檔名為較好之作法
    try {
      res.download(
        __dirname + '../../../public/avatar/' + req.params.customerID
      )
    } catch (err) {
      res.send(400)
    }
  })

  app.use('/api/image', router)
}
