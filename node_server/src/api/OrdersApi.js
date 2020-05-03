import express from 'express'
import Order from '../domain/Order.js'
import Cart from '../domain/Cart.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(sql, res, method = 'get', cid, body) {
  try {
    switch (method) {
      case 'post': {
        const d = new Date()
        const time_stamp = `${d.getFullYear()}-${d.getMonth() +
          1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

        const [result, error] = await database.promisePool
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
            body.rewordsPoints,
          ])
          .catch(console.error())

        const [
          cartItems,
          fields,
        ] = await database.promisePool
          .query(Cart.getCart(), [cid])
          .catch(console.error())

        for (const item of cartItems) {
          await database.promisePool
            .query(Order.postOrderDetail(), [
              result.insertId,
              item.productID,
              item.num,
              item.finalPrice,
            ])
            .catch(console.error())

          await database.promisePool
            .query(Order.UpdateProductStock(), [-item.num, item.productID])
            .catch(console.error())
        }

        if (body.coupon > 0) {
          await database.promisePool
            .query(Order.UpdateCouponValid(), [0, body.coupon])
            .catch(console.error())
        }

        if (body.rewordsPoints > 0) {
          await database.promisePool
            .query(Order.UpdateCustomerRewardsPoints(), [
              -body.rewordsPoints,
              cid,
            ])
            .catch(console.error())
        }

        await database.promisePool
          .query(Cart.deleteAllCart(), [cid])
          .catch(console.error())

        res.status(200).json()
        break
      }
      case 'put': {
        const [rows, fields] = await database.promisePool
          .query(sql, [0, body.orderID])
          .catch(console.error())

        const [
          products,
          fields3,
        ] = await database.promisePool
          .query(Order.getOrderDetail(), [body.orderID])
          .catch(console.error())

        for (const product of products) {
          await database.promisePool
            .query(Order.UpdateProductStock(), [product.num, product.productID])
            .catch(console.error())
        }

        const [
          order,
          fields2,
        ] = await database.promisePool
          .query(Order.getOrder(), [body.orderID])
          .catch(console.error())

        if (order[0].couponMapId > 0) {
          await database.promisePool
            .query(Order.UpdateCouponValid(), [1, order[0].couponMapId])
            .catch(console.error())
        }

        if (order[0].rewordsPoints > 0) {
          await database.promisePool
            .query(Order.UpdateCustomerRewardsPoints(), [
              order[0].rewordsPoints,
              order[0].CustomerID,
            ])
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
  executeSQL(Order.getOrders(), res, 'get', req.params.customerID)
})

router.post('/', (req, res) => {
  console.log('Orders post request ' + req.body.RecipientName + "'s order")
  executeSQL(Order.postOrder(), res, 'post', req.body.CustomerID, req.body)
})

//cancel order
router.put('/', (req, res) => {
  console.log('Orders put request where orderID = ' + req.body.orderID)
  executeSQL(Order.CancelOrder(), res, 'put', undefined, req.body)
})

export default router
