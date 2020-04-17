import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import users from './api/users.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//app.use('/products', products)
//app.use('/orders', orders)
app.use('/users', users)

// 未找到的錯誤 - 404
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// 處理其它還未實作的要求 - 501
app.use((err, req, res, next) => {
  res.status(err.status || 501)
  res.json({
    error: {
      code: err.status || 501,
      message: err.message,
    },
  })
})



export default app
