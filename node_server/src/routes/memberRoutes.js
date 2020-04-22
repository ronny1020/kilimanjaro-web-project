module.exports = app => {
    const member = require("../controllers/memberController.js");
  
    var router = require("express").Router();
  
    // Create a new member 註冊
    router.post("/", member.create);
  
    // Retrieve all customers 登入驗證
    router.get("/", member.findAll);
  
    // Retrieve all published customers
    // router.get("/published", customers.findAllPublished);
  
    // Retrieve a single member with id 製作用戶憑證
    router.get("/:customerID", member.findOne);
  
    // Update a member with id 更改資料
    router.put("/:customerID", member.update);
  
    // Delete a member with id 刪除帳號
    // router.delete("/:id", member.delete);
  
    // Delete all customers
    // router.delete("/", customers.deleteAll);
  
    app.use('/api/member', router);
  };