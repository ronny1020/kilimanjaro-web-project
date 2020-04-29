module.exports = app => {
  const mail = require('../controllers/mailController.js')
  var router = require('express').Router()

  //路由: 寄驗證信
  router.post('/verify', mail.sendMail)

  //路由...(可新增)

  app.use('/api/mail', router)
}
