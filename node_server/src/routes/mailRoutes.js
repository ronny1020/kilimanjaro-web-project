module.exports = app => {
  const mail = require('../controllers/mailController.js')
  var router = require('express').Router()

  //路由: 寄驗證信
  router.post('/verify', mail.sendMail)

  //路由...(可新增)
  //     0428

  // complete forget pwd v
  // enroll: mail verify (pend)
  // edit: change pwd =>輸入舊+改新+確認

  // //包成component
  // ALL: confirm password

  app.use('/api/mail', router)
}
