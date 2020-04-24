import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import ProductListApi from './api/ProductListApi'
import ProductApi from './api/ProductApi'
import MemberListApi from './api/MemberListApi'
import MemberApi from './api/MemberApi'
import RecordVisitApi from './api/RecordVisitApi'
import CartApi from './api/CartApi'
import Sellers_introListApi from './api/Sellers_introListApi'
import Sellers_introApi from './api/Sellers_introApi'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// import db from './models'
// db.sequelize.sync()

app.use('/ProductListApi', ProductListApi)
app.use('/ProductApi', ProductApi)
app.use('/RecordVisitApi', RecordVisitApi)
app.use('/CartApi', CartApi)

app.use('/MemberList', MemberListApi)
app.use('/Member', MemberApi)
app.use('/Sellers_introListApi', Sellers_introListApi)
app.use('/Sellers_introApi', Sellers_introApi)

app.get('/', (req, res) => {
  console.log('Request Home Page')
  res.send(`<h1>Kilimanjaro Api Server Home Page</h1>`)
})

//https://bezkoder.com/node-js-express-sequelize-mysql/
//RESTful API: (for members)
require('./routes/memberRoutes')(app)
require('./routes/favouriteRoutes')(app)

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
