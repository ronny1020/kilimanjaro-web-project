module.exports = app => {
  const favourite = require('../controllers/favouriteController.js')

  var router = require('express').Router()

  //新增喜好清單
  //req.body 上傳時包成json出去
  router.post('/', favourite.create)

  //列出所有人的喜好清單
  router.get('/', favourite.findAll)

  //列出該顧客的喜好清單
  router.get('/:customerID', favourite.findAllPublished)

  // router.get("/:customerID", favourite.findOne)

  // router.put("/:customerID", favourite.update)

  //刪除單筆
  //req.params 上傳時值存在網址出去
  router.delete("/:customerID/:productID", favourite.delete)

  //刪除該顧客的喜好清單
  router.delete("/:customerID", favourite.deleteAll)

  app.use('/api/favourite', router)
}
