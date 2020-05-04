module.exports = app => {
  const cram = require('../controllers/cramController.js')

  var router = require('express').Router()

  // Create a cram 新增客訴
  router.post('/', cram.create)

  app.use('/api/cram', router)
}
