module.exports = app => {
    const member = require("../controllers/favouriteController.js");
  
    var router = require("express").Router();
  
  
    router.post("/", favourite.create);
  
    // router.get("/", favourite.findAll);
  
    // router.get("/published", customers.findAllPublished);
  
    router.get("/:customerID", favourite.findOne);
  
    // router.put("/:customerID", favourite.update);
  
    router.delete("/:id", favourite.delete);
  
    router.delete("/", favourite.deleteAll);
  
    app.use('/api/favourite', router);
  };