module.exports = app => {
  const coupon = require('../controllers/couponController.js')

  var router = require('express').Router()

  // router.get("/:customerID", favourite.findOne)

  //列出全部coupon列表(顯示於優惠專區)
  router.get('/', coupon.findAll)

  //列出該顧客持有的有效coupon
  router.get('/:customerID', coupon.findAllValid)

  //刪除單筆coupon(實為修改)
  router.put("/", coupon.update)

  //新增單筆coupon
  router.post('/', coupon.create)

  
  // router.delete("/:customerID/:couponID", favourite.findAllPublished)

  //刪除該顧客的喜好清單
  // router.delete("/:customerID", favourite.deleteAll)

  app.use('/api/coupon', router)
}
