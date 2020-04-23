import express from 'express'
import Cart from '../domain/Cart.js'
import database from '../db/database.js'
import Product from '../domain/Product.js'

const router = express.Router()

async function executeSQL(
  sql,
  res,
  method = 'get',
  cid,
  pid = null,
  instance = {}
) {
  try {
    switch (method) {
      case 'post': {
        const insertId = { id: rows.insertId }
        const result = { ...instance, ...insertId }
        res.status(200).json(result)
        break
      }
      case 'delete': {
        res.status(200).json({})
        break
      }
      case 'get':
      default:
        {
          const [rows, fields] = await database.promisePool.query(sql, [cid])
          res.status(200).json({
            cart: rows,
          })
        }
        break
    }
  } catch (error) {
    console.log(error)
    res.status(200).json({
      message: error,
    })
  }
}

router.get('/:customerID', (req, res, next) => {
  console.log('Cart get request where customerID = ' + req.params.customerID)
  executeSQL(Cart.getCart(), res, 'get', req.params.customerID)
})

router.post('/', (req, res, next) => {
  let user = new User(
    req.body.name,
    req.body.username,
    req.body.password,
    req.body.email
  )

  executeSQL(user.addUserSQL(), res, 'post', false, user)
})

router.delete('/:userId', (req, res, next) => {
  executeSQL(User.deleteUserByIdSQL(req.params.userId), res, 'delete', false)
})

export default router
