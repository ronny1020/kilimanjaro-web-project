const db = require('../models')
const Favourite = db.favourites
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
    // favourtieID: req.body.favourtieID,
    customerID: req.body.customerID,
    productID: req.body.productID
    
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
  const favourtieID = req.query.favourtieID
  var condition = favourtieID
    ? { favourtieID: { [Op.like]: `%${favourtieID}%` } }
    : null

    Favourite.findAll({ where: condition })
    .then(data => {
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
  Favourite.findAll({ where: { customerID: req.params.customerID } })
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

// Delete a member with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id

//   Member.destroy({
//     where: { id: id },
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: 'Member was deleted successfully!',
//         })
//       } else {
//         res.send({
//           message: `Cannot delete Member with id=${id}. Maybe Member was not found!`,
//         })
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: 'Could not delete Member with id=' + id,
//       })
//     })
// }

// Delete all Members from the database.
// exports.deleteAll = (req, res) => {
//   Member.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Members were deleted successfully!` })
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while removing all tutorials.',
//       })
//     })
// }


