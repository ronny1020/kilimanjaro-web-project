import express from 'express'
import Comments from '../domain/Comments.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(
  sql,
  res,
  method = 'get',
  cid,
  pid,
  rate = null,
  commentText = null,
  instance = {}
) {
  try {
    switch (method) {
      case 'post': {
        let d = new Date()
        const addTime = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        const [rows, fields] = await database.promisePool
          .query(sql, [pid, cid, rate, addTime, commentText])
          .catch(console.error())
        res.status(200).json()
        break
      }
      case 'put': {
        const [rows, fields] = await database.promisePool
          .query(sql, [rate, commentText, pid, cid])
          .catch(console.error())
        res.status(200).json()
        break
      }

      case 'delete': {
        const [rows, fields] = await database.promisePool
          .query(sql, [cid, pid])
          .catch(console.error())
        res.status(200).json()
        break
      }
      case 'getNum':
        {
          const [rows, fields] = await database.promisePool
            .query(sql, [cid])
            .catch(console.error())
          res.status(200).json(rows[0].num)
        }
        break
      case 'get':
      default:
        {
          const [rows, fields] = await database.promisePool
            .query(sql, [cid])
            .catch(console.error())
          res.status(200).json({
            Comments: rows,
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

router.post('/', (req, res) => {
  console.log(
    'Comment post request where customerID = ' +
      req.body.customerID +
      ' productID = ' +
      req.body.productID +
      ' rate = ' +
      req.body.rate +
      ' comment = ' +
      req.body.comment
  )
  const num = req.body.num > 0 ? req.body.num : 1

  executeSQL(
    Comments.postComment(),
    res,
    'post',
    req.body.customerID,
    req.body.productID,
    req.body.rate,
    req.body.comment
  )
})

router.put('/', (req, res) => {
  console.log(
    'Comment put request where customerID = ' +
      req.body.customerID +
      ' productID = ' +
      req.body.productID +
      ' rate = ' +
      req.body.rate +
      ' comment = ' +
      req.body.comment
  )
  const num = req.body.num > 0 ? req.body.num : 1

  executeSQL(
    Comments.putComment(),
    res,
    'put',
    req.body.customerID,
    req.body.productID,
    req.body.rate,
    req.body.comment
  )
})

router.delete('/', (req, res) => {
  console.log(
    'Comment delete request where customerID = ' +
      req.body.customerID +
      ' productID = ' +
      req.body.productID
  )

  executeSQL(
    Comments.deleteComment(),
    res,
    'delete',
    req.body.customerID,
    req.body.productID
  )
})

export default router
