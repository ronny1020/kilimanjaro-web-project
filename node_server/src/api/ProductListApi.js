import express from 'express'
import ProductList from '../domain/ProductList.js'
import database from '../db/database.js'

const router = express.Router()

async function executeSQL(res, perPage, page, cid, method = 'get', query = {}) {
  try {
    const output = {
      totalRows: 0,
      perPage: perPage,
      totalPages: 0,
      page: page,
    }

    const results_total = await database.promisePool.query(
      await ProductList.getProductListRowsNum(query)
    )
    output.totalRows = results_total[0][0].num
    output.totalPages = Math.ceil(output.totalRows / perPage)
    if (output.totalPages < 1) output.totalPages = 1
    if (output.page < 1) output.page = 1
    if (output.page > output.totalPages) output.page = output.totalPages

    const rows = await database.promisePool.query(
      await ProductList.getProductList(query),
      [cid, cid, (output.page - 1) * output.perPage, output.perPage]
    )

    res.status(200).json({
      Range: output,
      ProductList: rows[0],
    })
  } catch (error) {
    console.log(error)
    res.status(200).json({
      message: error,
    })
  }
}

router.get('/:cid?/:perPage?/:page?', (req, res, next) => {
  const keyword = req.query.keyword ? req.query.keyword : ''

  const perPage = req.params.perPage ? parseInt(req.params.perPage) : 20
  const page = req.params.page ? parseInt(req.params.page) : 1

  console.log(
    'ProductList get request where' +
      ' perPage= ' +
      perPage +
      ' page= ' +
      page +
      ' by ' +
      req.params.cid +
      ' with ' +
      keyword +
      '.'
  )
  executeSQL(res, perPage, page, req.params.cid, 'get', req.query)
})

export default router
