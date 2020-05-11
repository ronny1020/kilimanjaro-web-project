import express from 'express'
import Product from '../domain/Product.js'
import database from '../db/database.js'
import Comments from '../domain/Comments.js'

const router = express.Router()

async function executeSQL(
  sql,
  res,
  pid,
  cid,
  method = 'get',
  multirows = true
) {
  try {
    const [rows, fields] = await database.promisePool.query(sql, [
      cid,
      cid,
      pid,
    ])

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

            if (rows[0].productID !== undefined) {
              result = rows[0]
              const tagRows = await database.promisePool.query(
                Product.getProductTags(),
                [result.productID]
              )
              result.tags = []
              tagRows[0].forEach(item => result.tags.push(item.tagName))
            }
            const visitedTimesRes = await database.promisePool.query(
              Product.getVisitedTimes(),
              [result.productID]
            )
            const [
              comments,
              fields,
            ] = await database.promisePool.query(Comments.getComments(), [
              result.productID,
            ])
            result = {
              ...result,
              visitedTimes: visitedTimesRes[0][0].num,
              comments: comments,
            }

            res.status(200).json(result)
          }
        }
        break
    }
  } catch (error) {
    console.log(error)
    res.status(200).json({ productID: 'not found' })
  }
}

router.get('/:pid/:cid', (req, res, next) => {
  console.log(
    'Product get request where id = ' + req.params.pid + ' ' + req.params.cid
  )
    executeSQL(
    Product.getProduct(),
    res,
    req.params.pid,
    req.params.cid,
    'get',
    false
  )
})

export default router
