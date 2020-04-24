import express from 'express'
import RecordVisit from '../domain/RecordVisit.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(sql, res, productId, memberId) {
  try {
    let d = new Date()
    const time_stamp = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    const rows = await database.promisePool.query(sql, [
      productId,
      memberId,
      time_stamp,
    ])

    res.status(200).json(rows)
  } catch (error) {
    console.log(error)
    res.status(200).json({ productID: 'not found' })
  }
}

router.post('/', (req, res, next) => {
  console.log('Visit Recorded ', req.body.productId, ' ', req.body.memberId)

  executeSQL(
    RecordVisit.postRecordVisit(),
    res,
    req.body.productId,
    req.body.memberId
  )
})

export default router
