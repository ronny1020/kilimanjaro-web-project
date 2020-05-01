import express from 'express'
import Order from '../domain/Order.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(sql, res, method = 'get', cid, body) {
  try {
    switch (method) {
      case 'post': {
        const d = new Date()
        const time_stamp = `${d.getFullYear()}-${d.getMonth() +
          1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

        const result = await database.promisePool
          .query(sql, [
            cid,
            time_stamp,
            body.shippingMethod,
            body.Freight,
            body.paymentMethod,
            body.InvoiceMethod,
            body.RecipientName,
            body.RecipientAddress,
            body.RecipientMobile,
            body.coupon,
            body.rewordPoint,
          ])
          .catch(console.error())

          console.log(result.insertId)

        res.status(200).json()
        break
      }
      case 'put': {
        const [rows, fields] = await database.promisePool
          .query(sql, [])
          .catch(console.error())
        res.status(200).json()
        break
      }
      case 'get':
      default:
        {
          const [rows, fields] = await database.promisePool
            .query(sql, [cid])
            .catch(console.error())
          const rowsDetail = await Promise.all(
            rows.map(async row => {
              const [
                products,
                fields,
              ] = await database.promisePool.query(Order.getOrderDetail(), [
                row.OrderID,
              ])
              return { ...row, products: products }
            })
          )

          await res.status(200).json({
            Orders: rowsDetail,
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
  console.log('Orders get request where customerID = ' + req.params.customerID)
  executeSQL(Order.getOrder(), res, 'get', req.params.customerID)
})

router.post('/', (req, res) => {
  console.log('Orders post request ' + req.body.RecipientName + "'s order")

  executeSQL(Order.postOrder(), res, 'post', req.body.CustomerID, req.body)
})

router.put('/', (req, res) => {
  console.log(
    'Orders put request where customerID = ' +
      req.body.customerID +
      ' productID = ' +
      req.body.productID +
      ' num = ' +
      req.body.num
  )
  const num = req.body.num > 0 ? req.body.num : 1

  executeSQL(
    Order.putOrder(),
    res,
    'put',
    req.body.customerID,
    req.body.productID,
    num
  )
})

export default router
