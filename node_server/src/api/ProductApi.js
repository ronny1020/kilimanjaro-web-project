import express from 'express'
import Product from '../domain/Product.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(
  sql,
  res,
  id,
  method = 'get',
  multirows = true,
  instance = {}
) {
  try {
    const [rows, fields] = await database.promisePool.query(sql, [id])

    switch (method) {
      case 'get':
      default:
        {
          if (multirows) {
            res.status(200).json({
              Product: rows,
            })
          } else {
            let result = {}
            if (rows.length) result = rows[0]
            console.log(result.productID)
            if (!result.productID) result = { productID: 'not found' }
            res.status(200).json(result)
          }
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

router.get('/:id', (req, res, next) => {
  console.log('Product get request where id = ' + req.params.id)
  executeSQL(Product.getProduct(), res, [req.params.id], 'get', false)
})

export default router
