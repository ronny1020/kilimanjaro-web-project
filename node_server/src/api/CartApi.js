import express from 'express'
import Cart from '../domain/Cart.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(
  sql,
  res,
  method = 'get',
  cid,
  pid,
  num = null,
  instance = {}
) {
  try {
    switch (method) {
      case 'post': {
        console.log([cid, pid, num])
        const [rows, fields] = await database.promisePool.query(sql, [
          cid,
          pid,
          num,
        ])
        res.status(200).json(result)
        break
      }
      case 'delete': {
        const [rows, fields] = await database.promisePool.query(sql, [cid, pid])
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
  console.log(
    'Cart post request where customerID = ' +
      req.body.customerID +
      ' productId = ' +
      req.body.productId +
      ' num = ' +
      req.body.num
  )
  executeSQL(
    Cart.postCart(),
    res,
    'post',
    req.body.customerID,
    req.body.productId,
    req.body.num
  )
})

router.delete('/', (req, res, next) => {
  console.log(
    'Cart delete request where customerID = ' +
      req.body.customerID +
      ' productId = ' +
      req.body.productId
  )
  executeSQL(
    Cart.deleteCart(),
    res,
    'delete',
    req.body.customerID,
    req.body.productId
  )
})

export default router
