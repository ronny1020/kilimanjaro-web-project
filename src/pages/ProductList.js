import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductList/productListItem'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  getProductList,
  setQuery,
  setKeyword,
  setColumn,
} from '../actions/getProductList'
import { getMemberID } from '../actions/getMemberID'

import { AddProductToCart, removeProductFromCart } from '../actions/CartAction'

import {
  AddProductToFavourite,
  removeProductFromFavourite,
} from '../actions/FavouriteAction'

import Pagination from 'react-bootstrap/Pagination'
import CardSecondary from '../components/CardSecondary'

import Zoom from '@material-ui/core/Zoom'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'

import Select from '@material-ui/core/Select'
import Switch from '@material-ui/core/Switch'
import Slider from '@material-ui/core/Slider'
import Input from '@material-ui/core/Input'

import ProductListSidebar from '../components/ProductList/productListSidebar'

function ProductList(props) {
  const [page, setPage] = React.useState(1)
  const [pageListSelect, setPageListSelect] = React.useState([1])
  const [rowStart, setRowStart] = React.useState(1)
  const [rowEnd, setRowEnd] = React.useState(1)

  const [advanceSearch, setAdvanceSearch] = React.useState(false)
  const [priceRange, setPriceRange] = React.useState([0, 1000])

  const [orderBy, setOrderBy] = React.useState('')
  const [period, setPeriod] = React.useState('all')

  const [showZoom, setShowZoom] = React.useState(false)

  const [searchRecord, setSearchRecord] = React.useState(
    localStorage.getItem('searchRecord')
      ? JSON.parse(localStorage.getItem('searchRecord'))
      : []
  )

  const {
    products,
    range,
    getProductList,
    setQuery,
    setKeyword,
    setColumn,
    AddProductToCart,
    removeProductFromCart,
    AddProductToFavourite,
    removeProductFromFavourite,
    query,
    keyword,
    column,
    category,
  } = props

  const memberID = getMemberID()

  useEffect(() => {
    let condition = ''
    condition = keyword ? condition + 'keyword=' + keyword + '&' : condition
    condition = column ? condition + 'column=' + column + '&' : condition
    condition = category ? condition + 'category=' + category + '&' : condition
    condition = orderBy ? condition + 'orderBy=' + orderBy + '&' : condition
    condition =
      period !== 'all' ? condition + 'period=' + period + '&' : condition
    condition = advanceSearch
      ? condition +
        'priceRangeFrom=' +
        priceRange[0] +
        '&' +
        'priceRangeTo=' +
        priceRange[1] +
        '&'
      : condition
    if (keyword || category || orderBy || advanceSearch) {
      setQuery(condition)
    } else {
      setQuery('')
    }
    setPage(1)
  }, [
    advanceSearch,
    category,
    column,
    keyword,
    orderBy,
    period,
    priceRange,
    setQuery,
  ])

  useEffect(() => {
    getProductList(page, memberID, query)
  }, [getProductList, page, memberID, query])

  useEffect(() => {
    let pageList = []
    if (range) {
      for (let i = 1; i <= 3 && i <= range.totalPages; i++) {
        pageList.push(i)
      }

      if (range.page <= 6) {
        for (let i = 4; i <= range.page + 2 && i <= range.totalPages; i++) {
          pageList.push(i)
        }
      } else {
        pageList.push('ellipsis')

        for (
          let i = range.page - 2;
          i <= range.page + 2 && i <= range.totalPages;
          i++
        ) {
          pageList.push(i)
        }
      }

      if (range.totalPages - range.page <= 5) {
        for (let i = range.page + 3; i <= range.totalPages; i++) {
          pageList.push(i)
        }
      } else {
        pageList.push('ellipsis')
        for (let i = range.totalPages - 2; i <= range.totalPages; i++) {
          pageList.push(i)
        }
      }

      setPageListSelect(pageList)

      setRowStart(
        (range.page - 1) * range.perPage + 1 < range.totalRows
          ? (range.page - 1) * range.perPage + 1
          : range.totalRows
      )
      setRowEnd(
        range.page * range.perPage < range.totalRows
          ? range.page * range.perPage
          : range.totalRows
      )
    }
  }, [range])

  useEffect(() => {
    if (products) {
      setShowZoom(false)
      setShowZoom(true)
    }
  }, [products, query])

  if (products === undefined) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </>
    )
  }

  const productList = products.map((product, i) => {
    return (
      <div key={i}>
        <Zoom
          in={showZoom}
          style={{
            transformOrigin: '0 0 0',
            transitionDelay: showZoom ? 300 * i + 'ms' : '0ms',
          }}
          {...(showZoom ? { timeout: 1000 } : {})}
        >
          <div>
            <Link
              to={'../product/' + product.productID}
              className="linkNoUnderline"
            >
              <ProductListItem>
                <div className="row">
                  <div className="col-md-auto d-flex justify-content-center">
                    {' '}
                    <img
                      alt=""
                      src={'../images/products/' + product.productID + '/0.jpg'}
                      className="productListImage"
                      onError={(event) =>
                        (event.target.src = '../images/products/default.jpg')
                      }
                    />
                  </div>

                  <div className="col-md-auto p-3">
                    <h3>{product.ProductName}</h3>
                    <p>price:{product.UnitPrice}</p>
                    {product.discount !== null ? (
                      <p>
                        special price:{product.UnitPrice - product.discount}
                      </p>
                    ) : (
                      <p></p>
                    )}
                    <div className="form-inline">
                      {/* favourite button */}

                      {product.favouriteID === null ? (
                        <button
                          className="btn btn-primary m-1"
                          onClick={(e) => {
                            e.preventDefault()
                            async function add() {
                              await AddProductToFavourite(
                                product.productID,
                                memberID
                              )
                              await getProductList(page, memberID, query)
                            }
                            add()
                          }}
                        >
                          add to favourite
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger  m-1"
                          onClick={(e) => {
                            e.preventDefault()
                            async function remove() {
                              await removeProductFromFavourite(
                                product.productID,
                                memberID
                              )
                              await getProductList(page, memberID, query)
                            }
                            remove()
                          }}
                        >
                          remove from favourite
                        </button>
                      )}
                      {/* cart button */}
                      {product.num == null ? (
                        <button
                          className="btn btn-primary  m-1"
                          onClick={(e) => {
                            e.preventDefault()
                            async function add() {
                              await AddProductToCart(
                                product.productID,
                                memberID
                              )
                              await getProductList(page, memberID, query)
                            }
                            add()
                          }}
                        >
                          add to cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger  m-1"
                          onClick={(e) => {
                            e.preventDefault()
                            async function remove() {
                              await removeProductFromCart(
                                product.productID,
                                memberID
                              )
                              // await getProductList(page, memberID)
                            }
                            remove()
                          }}
                        >
                          remove({product.num}) from cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ProductListItem>
            </Link>
          </div>
        </Zoom>
      </div>
    )
  })

  // page selection

  const PageIndex = pageListSelect.map((page, i) => {
    switch (page) {
      case range.page:
        return (
          <Pagination.Item key={i} active>
            {page}
          </Pagination.Item>
        )
      case 'ellipsis':
        return <Pagination.Ellipsis disabled key={i} />
      default:
        return (
          <Pagination.Item
            key={i}
            onClick={() => {
              setPage(page)
              document.documentElement.scrollTop = 0
            }}
          >
            {page}
          </Pagination.Item>
        )
    }
  })

  // calculate the date range

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-3">
            <ProductListSidebar />
          </div>
          <div className="col-md-9 mt-3">
            <CardSecondary>
              <div className="row">
                <div className="col-md-9 d-flex align-items-end pb-0 mb-3">
                  <Autocomplete
                    className="w-100"
                    freeSolo
                    value={keyword}
                    disableClearable
                    options={searchRecord.map((option) => option.keyword)}
                    onChange={(event, newValue) => {
                      let check = true
                      searchRecord.forEach((keyValue) => {
                        if (keyValue.keyword === newValue) {
                          check = false
                        }
                      })
                      if (check) {
                        setSearchRecord([
                          ...searchRecord,
                          { keyword: newValue },
                        ])
                      }
                      localStorage.setItem(
                        'searchRecord',
                        JSON.stringify(searchRecord)
                      )
                    }}
                    onInputChange={(event, newInputValue) => {
                      setKeyword(newInputValue)
                    }}
                    renderInput={(params) => (
                      <TextField
                        className="m-0"
                        {...params}
                        label="關鍵字"
                        id="keyword"
                        margin="normal"
                        variant="outlined"
                        // InputProps={{ ...params.InputProps, type: 'search' }}
                      />
                    )}
                  />
                </div>
                <div className="col-md-3 d-flex align-items-end pb-0">
                  <FormControl className="w-100 mb-3" variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      搜尋欄位
                    </InputLabel>
                    <Select
                      native
                      MenuProps={{ disableScrollLock: true }}
                      value={column}
                      onChange={(event) => {
                        setColumn(event.target.value)
                      }}
                      label="搜尋欄位"
                    >
                      <option value={'ProductName'}>產品名稱</option>
                      <option value={'sName'}>賣家名稱</option>
                      <option value={'specification'}>規格</option>
                      <option value={'description'}>介紹</option>
                      <option value={'tag'}>TAG</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
              {advanceSearch ? (
                <>
                  <div className="row">
                    <div className="col-md-6">
                      {' '}
                      <Typography id="priceRange" gutterBottom>
                        價格範圍
                      </Typography>
                      <Slider
                        min={0}
                        max={1000}
                        value={priceRange}
                        aria-labelledby="priceRange"
                        onChange={(event, newValue) => {
                          setPriceRange(newValue)
                        }}
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="d-inline-block">
                        <Typography id="priceRangeFrom" gutterBottom>
                          從：
                        </Typography>
                        <Input
                          value={priceRange[0]}
                          margin="dense"
                          aria-labelledby="priceRangeFrom"
                          onChange={(event) => {
                            let inputValue = Math.round(event.target.value)
                            if (inputValue < 0) inputValue = 0
                            if (inputValue > 1000) inputValue = 1000
                            if (inputValue < priceRange[1]) {
                              setPriceRange([inputValue, priceRange[1]])
                            } else {
                              setPriceRange([priceRange[1], inputValue])
                            }
                          }}
                          inputProps={{
                            min: 0,
                            max: 1000,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                          }}
                        />
                      </div>

                      <div className="d-inline-block ml-3">
                        <Typography id="priceRangeFrom" gutterBottom>
                          至：
                        </Typography>
                        <Input
                          value={priceRange[1]}
                          margin="dense"
                          aria-labelledby="priceRangeFrom"
                          onChange={(event) => {
                            let inputValue = Math.round(event.target.value)
                            if (inputValue < 0) inputValue = 0
                            if (inputValue > 1000) inputValue = 1000
                            if (inputValue > priceRange[0]) {
                              setPriceRange([priceRange[0], inputValue])
                            } else {
                              setPriceRange([inputValue, priceRange[0]])
                            }
                          }}
                          inputProps={{
                            min: 0,
                            max: 1000,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="row">
                <FormControlLabel
                  control={
                    <Switch
                      checked={advanceSearch}
                      color="primary"
                      onChange={(event) =>
                        setAdvanceSearch(event.target.checked)
                      }
                    />
                  }
                  label="進階搜尋"
                  className="m-3"
                />
              </div>
            </CardSecondary>

            <div className="topSpace"></div>
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-start mb-3 col">
                  <FormControl>
                    <InputLabel htmlFor="orderBy">排序方式</InputLabel>
                    <Select
                      native
                      value={orderBy}
                      onChange={(event) => {
                        setOrderBy(event.target.value)
                        if (
                          orderBy === 'visitedTimes DESC' ||
                          orderBy === 'sellingVolume DESC'
                        )
                          setPeriod('all')
                      }}
                      inputProps={{
                        id: 'orderBy',
                      }}
                    >
                      <option value={'add_time DESC'}>時間 (近 → 遠)</option>
                      <option value={'add_time ASC'}>時間 (遠 → 近)</option>
                      <option value={'finalPrice ASC'}>價格 (低 → 高)</option>
                      <option value={'finalPrice DESC'}>價格 (高 → 低)</option>
                      <option value={'discount DESC'}>最多折扣</option>
                      <option value={'visitedTimes DESC'}>最高人氣</option>
                      <option value={'sellingVolume DESC'}>最熱銷</option>
                    </Select>
                  </FormControl>
                  {orderBy === 'visitedTimes DESC' ||
                  orderBy === 'sellingVolume DESC' ? (
                    <FormControl className="ml-3">
                      <InputLabel htmlFor="period">時間</InputLabel>
                      <Select
                        native
                        value={period}
                        onChange={(event) => {
                          setPeriod(event.target.value)
                        }}
                        inputProps={{
                          id: 'period',
                        }}
                      >
                        <option value={'all'}>全部</option>
                        <option value={'1 day'}>單日內</option>
                        <option value={'1 week'}>單週內</option>
                        <option value={'1 month'}>單月內</option>
                        <option value={'3 month'}>三個月內</option>
                        <option value={'6 month'}>六個月內</option>
                        <option value={'1 year'}>一年內</option>
                      </Select>
                    </FormControl>
                  ) : (
                    <></>
                  )}
                </div>
                <p className="d-flex justify-content-end mb-3 align-self-end col">
                  第 {range.page} 頁( {rowStart} - {rowEnd} )，共{' '}
                  {range.totalPages}頁{range.totalRows} 項
                </p>
              </div>

              <div>{productList}</div>
              <Pagination className="justify-content-center mt-5 ">
                <Pagination.First
                  onClick={() => {
                    setPage(1)
                    document.documentElement.scrollTop = 0
                  }}
                />
                <Pagination.Prev
                  onClick={() => {
                    setPage(range.page > 1 ? range.page - 1 : 1)
                    document.documentElement.scrollTop = 0
                  }}
                />
                {PageIndex}
                <Pagination.Next
                  onClick={() => {
                    setPage(
                      range.page < range.totalPages
                        ? range.page + 1
                        : range.totalPages
                    )
                    document.documentElement.scrollTop = 0
                  }}
                />
                <Pagination.Last
                  onClick={() => {
                    setPage(range.totalPages)
                    document.documentElement.scrollTop = 0
                  }}
                />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.ProductListReducer.items.ProductList,
    range: state.ProductListReducer.items.Range,
    query: state.ProductListReducer.query,
    keyword: state.ProductListReducer.keyword,
    column: state.ProductListReducer.column,
    category: state.ProductListReducer.category,
  }
}

export default connect(mapStateToProps, {
  getProductList,
  setQuery,
  setKeyword,
  setColumn,
  AddProductToCart,
  removeProductFromCart,
  AddProductToFavourite,
  removeProductFromFavourite,
})(ProductList)
