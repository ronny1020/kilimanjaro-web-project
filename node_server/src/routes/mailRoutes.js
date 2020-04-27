module.exports = app => {
    const mail = require("../controllers/mailController.js");
    var router = require("express").Router();

    //路由: 寄驗證信
    router.post('/verify', mail.sendMail)
  
    
  
    app.use('/api/mail', router);
  };