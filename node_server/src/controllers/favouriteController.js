const db = require('../models')
const Favourite = db.favourites
const Product = db.products
const Op = db.Sequelize.Op

// Create and Save a new FAVOURITE
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a favourite
  const favourite = {
    // favouriteID: req.body.favourtieID,
    customerID: req.body.customerID,
    productID: req.body.productID,
  }

  // Save favourite in the database
  Favourite.create(favourite)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating Member.',
      })
    })
}

// Retrieve all Members from the database.(DONE)
exports.findAll = (req, res) => {
  const favouriteID = req.query.favouriteID
  var condition = favouriteID
    ? { favouriteID: { [Op.like]: `%${favouriteID}%` } }
    : null

  Favourite.findAll({
    where: condition,
    include: [{ model: Product }],
  })
    .then(data => {
      const resObj = data.map(Favourite => {
        // return Object.assign({
        //   favouriteID: Favourite.favouriteID,
        //   customerID: Favourite.customerID,
        //   productID: Favourite.productID,
        //   ProductName: Favourite.product.ProductName,
        // })
      })
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving customers.',
      })
    })
}

// find specific Member favourites(DONE)
exports.findAllPublished = (req, res) => {
  Favourite.findAll({
    where: { customerID: req.params.customerID },
    include: [{ model: Product }],
  })
    .then(data => {
      const resObj = data.map(Favourite => {
        // return Object.assign({
        //   favouriteID: Favourite.favouriteID,
        //   customerID: Favourite.customerID,
        //   productID: Favourite.productID,
        //   ProductName: Favourite.product.ProductName,
        // })
      })
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving favourites.',
      })
    })
}
// Find a single member with an id(DONE)
// exports.findOne = (req, res) => {
//   const customerID = req.params.customerID

//   Favourite.findByPk(customerID)
//     .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: 'Error retrieving member with id=' + customerID,
//       })
//     })
// }

// Update a member by the id in the request(DONE)
// exports.update = (req, res) => {
//   const customerID = req.params.customerID

//   Favourite.update(req.body, {
//     where: { customerID: customerID },
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: 'Member was updated successfully.',
//         })
//       } else {
//         res.send({
//           message: `Cannot update Member with id=${customerID}. Maybe member was not found or req.body is empty!`,
//         })
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: `Error updating Member with id=${customerID}`,
//       })
//     })
// }

// Delete a fav with the specified customer&productid in the request (DONE)
exports.delete = (req, res) => {
  const customerID = req.params.customerID
  const productID = req.params.productID

  // const customerID = req.body.customerID
  // const productID = req.body.productID

  Favourite.destroy({
    where: { customerID: customerID, productID: productID },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete favourite with id=${id}, product=${productID}.`,
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Member with id=' + id,
      })
    })
}

// Delete all FAVS from the CUSTOMER.
exports.deleteAll = (req, res) => {
  const customerID = req.params.customerID
  Favourite.destroy({
    where: { customerID: customerID },
    truncate: false,
  })
    .then(nums => {
      res.send({ message: `${nums} FAVS were deleted successfully!` })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all tutorials.',
      })
    })
}
