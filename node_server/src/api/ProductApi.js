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
  console.log(id)
  try {
    const [rows, fields] = await database.promisePool.query(sql, [id])

    switch (method) {
      case 'post': {
        const insertId = { id: rows.insertId }
        const result = { ...instance, ...insertId }
        res.status(200).json(result)
        break
      }
      case 'put': {
        let result = {}
        if (rows.affectedRows) result = { ...instance }
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
          if (multirows) {
            res.status(200).json({
              Product: rows,
            })
          } else {
            let result = {}
            if (rows.length) result = rows[0]
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
  console.log('Product get request where id ='+req.params.id)
  executeSQL(Product.getProduct(req.query), res, [req.params.id])
})

export default router
