const db = require('../models')
const Cram = db.crams
// const Customer = db.customers
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  var datetime = new Date()
//   console.log(datetime.toISOString().slice(0, 10))
  const newCram = {
    //cramID自動生成
    //時間自動生成
    //處理與否: 預設N
    customerID: req.body.customerID,
    cDate: datetime.toISOString().slice(0, 10),
    cramContent: req.body.cramContent,
  }

  // Save Member in the database
  Cram.create(newCram)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating Cram.',
      })
    })
}
