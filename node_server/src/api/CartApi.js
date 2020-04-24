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
        const [rows, fields] = await database.promisePool
          .query(sql, [cid, pid, num])
          .catch(console.error())
        res.status(200).json()
        break
      }
      case 'delete': {
        if (pid == 'all') {
          const [rows, fields] = await database.promisePool
            .query(sql, [cid])
            .catch(console.error())
        } else {
          const [rows, fields] = await database.promisePool
            .query(sql, [cid, pid])
            .catch(console.error())
        }
        res.status(200).json()
        break
      }
      case 'get':
      default:
        {
          const [rows, fields] = await database.promisePool
            .query(sql, [cid])
            .catch(console.error())
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
      ' productID = ' +
      req.body.productID +
      ' num = ' +
      req.body.num
  )
  executeSQL(
    Cart.postCart(),
    res,
    'post',
    req.body.customerID,
    req.body.productID,
    req.body.num
  )
})

router.delete('/', (req, res, next) => {
  console.log(
    'Cart delete request where customerID = ' +
      req.body.customerID +
      ' productID = ' +
      req.body.productID
  )
  if (req.body.productID == 'all') {
    executeSQL(
      Cart.deleteAllCart(),
      res,
      'delete',
      req.body.customerID,
      req.body.productID
    )
  } else {
    executeSQL(
      Cart.deleteCart(),
      res,
      'delete',
      req.body.customerID,
      req.body.productID
    )
  }
})

export default router
