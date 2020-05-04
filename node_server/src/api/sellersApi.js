import express from 'express'
import database from '../db/database.js'
import SellersApi from '../domain/SellersApi.js'

const router = express.Router()

async function executeSQL(
  sql,
  res,
  method = 'get',
  multirows = true,
  instance = {}
) {
  try {
    const [rows, fields] = await database.promisePool.query(sql)

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
              MemberList: rows,
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

router.get('/', (req, res, next) => {
  console.log('SellersApi get request')
  executeSQL(SellersApi.getSellersApi(req.query), res)
  
})

router.get('/S001', (req, res, next) => {
  console.log('SellersApi get request')

  executeSQL(SellersApi.getProS001(req.query), res)
})
router.get('/S002', (req, res, next) => {
  console.log('SellersApi get request')

  executeSQL(SellersApi.getProS002(req.query), res)
})
router.get('/S003', (req, res, next) => {
  console.log('SellersApi get request')

  executeSQL(SellersApi.getProS003(req.query), res)
})
router.get('/S004', (req, res, next) => {
  console.log('SellersApi get request')

  executeSQL(SellersApi.getProS004(req.query), res)
})
router.get('/S005', (req, res, next) => {
  console.log('SellersApi get request')

  executeSQL(SellersApi.getProS005(req.query), res)
})


export default router