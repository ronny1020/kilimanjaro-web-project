const db = require('../models')
const Member = db.customers
const Op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Member
  const member = {
    // Auto-gen cid (or generate at FRONT)
    cName: req.body.name,
    cAccount: req.body.account,
    cEmail: req.body.email,
    cPassword: req.body.password,
  }

  // Save Tutorial in the database
  Member.create(member)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating Member.',
      })
    })
}

// Retrieve all Members from the database.
exports.findAll = (req, res) => {
  const customerID = req.query.customerID
  var condition = customerID ? { customerID: { [Op.like]: `%${customerID}%` } } : null

  Member.findAll({ where: condition })
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

// Find a single member with an id
exports.findOne = (req, res) => {
  const customerID = req.params.customerID

  Member.findByPk(customerID)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Tutorial with id=' + customerID,
      })
    })
}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const customerID = req.params.customerID

  Member.update(req.body, {
    where: { customerID: customerID },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Tutorial was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Member with id=${customerID}. Maybe Tutorial was not found or req.body is empty!`,
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Member with id=${customerID}`,
      })
    })
}

// Delete a member with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id

//   Member.destroy({
//     where: { id: id },
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: 'Tutorial was deleted successfully!',
//         })
//       } else {
//         res.send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
//         })
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: 'Could not delete Tutorial with id=' + id,
//       })
//     })
// }

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Member.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` })
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while removing all tutorials.',
//       })
//     })
// }

// find all published Tutorial
// exports.findAllPublished = (req, res) => {
//   Member.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while retrieving tutorials.',
//       })
//     })
// }
