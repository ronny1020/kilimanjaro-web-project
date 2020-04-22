module.exports = app => {
    const favourite = require("../controllers/favouriteController.js");
  
    var router = require("express").Router();
  
    //新增喜好清單
    // router.post("/", favourite.create);
  
    //列出所有人的喜好清單
    router.get("/", favourite.findAll);
  
    //列出該顧客的喜好清單
    router.get("/:customerID", favourite.findAllPublished);
  
    // router.get("/:customerID", favourite.findOne);
  
    // router.put("/:customerID", favourite.update);
  
    //刪除單筆
    // router.delete("/:id", favourite.delete);
  
    //刪除全部
    // router.delete("/", favourite.deleteAll);
  
    app.use('/api/favourite', router);
  };