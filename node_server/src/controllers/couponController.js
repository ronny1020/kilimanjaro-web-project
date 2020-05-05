const db = require('../models')
const Coupon = db.coupon
const ConponMap = db.couponMap
const Op = db.Sequelize.Op

exports.create = (req, res) => {

  const newCoupon = {
    couponID: req.body.couponID,
    customerID: req.body.customerID,
    //vaild default 1 (true)
    // valid: req.body.valid,
  }

  // Save Member in the database
  ConponMap.create(newCoupon)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating Coupon.',
      })
    })
}

exports.findAll = (req, res) => {
  const couponID = req.query.couponID
  var condition = couponID ? { couponID: { [Op.like]: `%${couponID}%` } } : null

  Coupon.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving coupon.',
      })
    })
}

exports.update = (req, res) => {
  const couponMapId = req.body.couponMapId

  ConponMap.update(req.body, {
    where: { couponMapId: couponMapId },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'coupon was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update coupon with id=${couponMapId}. Maybe coupon was not found or req.body is empty!`,
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating coupon with id=${couponMapId}`,
      })
    })
}

exports.findAllValid = (req, res) => {
  ConponMap.findAll({
    where: { customerID: req.params.customerID, valid: true },
    include: [{ model: Coupon }],
  })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving favourites.',
      })
    })
}
