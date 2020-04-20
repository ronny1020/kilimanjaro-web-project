import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import ProductListApi from './api/ProductListApi'
import MemberListApi from './api/MemberListApi'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/ProductListApi', ProductListApi)
app.use('/member', MemberListApi)

app.get('/', (req, res) => {
  console.log('Request Home Page')
  res.send(`<h1>Kilimanjaro Api Server Home Page</h1>`)
})

// error - 404
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error - 501
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
