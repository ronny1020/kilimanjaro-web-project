const db = require('../models')
const Coupon = db.coupon
const ConponMap = db.couponMap
const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
  const couponID = req.query.couponID
  var condition = couponID ? { couponID: { [Op.like]: `%${couponID}%` } } : null

  Coupon.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving coupon.',
      })
    })
}

exports.update = (req, res) => {
  const customerID = req.params.customerID

  Coupon.update(req.body, {
    where: { customerID: customerID },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Member was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Member with id=${customerID}. Maybe member was not found or req.body is empty!`,
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Member with id=${customerID}`,
      })
    })
}

exports.findAllValid = (req, res) => {
  Coupon.findAll({
    where: { customerID: req.params.customerID },
    include: [{ model: Product }],
  })
    .then(data => {
      const resObj = data.map(Favourite => {
        return Object.assign({
          favouriteID: Favourite.favouriteID,
          customerID: Favourite.customerID,
          productID: Favourite.productID,
          ProductName: Favourite.product.ProductName,
        })
      })
      res.send(resObj)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving favourites.',
      })
    })
}