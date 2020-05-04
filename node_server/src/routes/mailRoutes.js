module.exports = app => {
  const mail = require('../controllers/mailController.js')
  var router = require('express').Router()

  //路由: 寄驗證信
  router.post('/verify', mail.sendVerify)

  //路由: 客服罐頭回信
  router.post('/reply', mail.sendReply)

  app.use('/api/mail', router)
}
