import express from 'express'
import ProductList from '../domain/ProductList.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(sql, res, perPage, page, cid, method = 'get') {
  try {
    const output = {
      totalRows: 0,
      perPage: perPage,
      totalPages: 0,
      page: page,
      rows: 0,
    }
    const t_sql = 'SELECT COUNT(1) num FROM coffee.products'
    const results_total = await database.promisePool.query(t_sql)
    output.totalRows = results_total[0][0].num
    output.totalPages = Math.ceil(output.totalRows / perPage)
    if (output.page < 1) output.page = 1
    if (output.page > output.totalPages) output.page = output.totalPages

    const rows = await database.promisePool.query(sql, [
      cid,
      (output.page - 1) * output.perPage,
      output.perPage,
    ])

    switch (method) {
      case 'get':
      default:
        {
          res.status(200).json({
            Range: output,
            ProductList: rows[0],
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

router.get('/:cid?/:perPage?/:page?', (req, res, next) => {
  const perPage = req.params.perPage ? parseInt(req.params.perPage) : 20
  const page = req.params.page ? parseInt(req.params.page) : 1

  console.log(
    'ProductList get request where' +
      ' perPage= ' +
      perPage +
      ' page= ' +
      page +
      ' by ' +
      req.params.cid
  )
  executeSQL(ProductList.getProductList(), res, perPage, page, req.params.cid)
})

export default router
