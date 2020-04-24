import express from 'express'
import Sellers_intro from '../domain/Sellers_intro.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(
  sql,
  res,
  id,
  method = 'get',
  multirows = true,
  
) {
  try {
    const [rows, fields] = await database.promisePool.query(sql, [id])

    switch (method) {
      case 'get':
      default:
        {
          if (multirows) {
            res.status(200).json({
              Member: rows,
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
  console.log('Sellers_intro get request where id = ' + req.params.id)
  executeSQL(Sellers_intro.getsellers_intro(), res, [req.params.id], 'get', false)
})

export default router
