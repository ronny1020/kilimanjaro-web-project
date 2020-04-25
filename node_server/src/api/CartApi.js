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
        const [rows, fields] = await database.promisePool
          .query(sql, [cid, pid, num])
          .catch(console.error())
        res.status(200).json()
        break
      }
      case 'put': {
        const [rows, fields] = await database.promisePool
          .query(sql, [num, cid, pid])
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
      case 'getNum':
        {
          const [rows, fields] = await database.promisePool
            .query(sql, [cid])
            .catch(console.error())
          res.status(200).json(
            rows[0].num
          )
        }
        break
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

router.get('/cartNum/:customerID', (req, res, next) => {
  console.log('Cart get cartNum request where customerID = ' + req.params.customerID)
  executeSQL(Cart.getCartNum(), res, 'getNum', req.params.customerID)
})

router.get('/:customerID', (req, res, next) => {
  console.log('Cart get request where customerID = ' + req.params.customerID)
  executeSQL(Cart.getCart(), res, 'get', req.params.customerID)
})

router.post('/', (req, res) => {
  console.log(
    'Cart post request where customerID = ' +
      req.body.customerID +
      ' productID = ' +
      req.body.productID +
      ' num = ' +
      req.body.num
  )
  const num = req.body.num > 0 ? req.body.num : 1

  executeSQL(
    Cart.postCart(),
    res,
    'post',
    req.body.customerID,
    req.body.productID,
    num
  )
})

router.put('/', (req, res) => {
  console.log(
    'Cart put request where customerID = ' +
      req.body.customerID +
      ' productID = ' +
      req.body.productID +
      ' num = ' +
      req.body.num
  )
  const num = req.body.num > 0 ? req.body.num : 1

  executeSQL(
    Cart.putCart(),
    res,
    'put',
    req.body.customerID,
    req.body.productID,
    num
  )
})

router.delete('/', (req, res) => {
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
