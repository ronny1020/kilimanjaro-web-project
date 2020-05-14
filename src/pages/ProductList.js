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
import { getCartNum } from '../actions/CartAction'

import {
  AddProductToFavourite,
  removeProductFromFavourite,
} from '../actions/FavouriteAction'

import { setCategory } from '../actions/getProductList'

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
import Rating from '@material-ui/lab/Rating'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import ViewListIcon from '@material-ui/icons/ViewList'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import Tooltip from '@material-ui/core/Tooltip'

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
  const [rate, setRate] = React.useState(null)

  const [showZoom, setShowZoom] = React.useState(true)

  const [view, setView] = React.useState(
    localStorage.getItem('view') ? localStorage.getItem('view') : 'list'
  )

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
    setCategory,
    AddProductToCart,
    removeProductFromCart,
    AddProductToFavourite,
    removeProductFromFavourite,
    query,
    keyword,
    column,
    category,
    getCartNum,
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
    condition = advanceSearch ? condition + 'rate=' + rate + '&' : condition
    console.log(condition)
    async function start() {
      await getProductList(page, memberID, condition)
      await setQuery(condition)
    }
    start()
  }, [
    getProductList,
    page,
    memberID,
    keyword,
    column,
    category,
    orderBy,
    period,
    advanceSearch,
    priceRange,
    rate,
    setQuery,
    view,
  ])

  useEffect(() => {
    if (range) {
      let pageList = []
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
    if (products !== undefined) {
      setTimeout(() => {
        setShowZoom(true)
      }, 0)
    }
  }, [products])

  if (products === undefined) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </>
    )
  }

  const productListMain = products.map((product, i) => {
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
              className="linkNoUnderline text-dark"
              onClick={() => {
                document.body.scrollTop = 0 // For Safari
                document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
              }}
            >
              <ProductListItem>
                <div
                  className={view === 'list' ? 'row' : 'productListBlockView'}
                >
                  <div
                    className={
                      view === 'list'
                        ? 'col-md-auto d-flex justify-content-center'
                        : ''
                    }
                  >
                    <img
                      alt=""
                      src={'../images/products/' + product.productID + '/0.jpg'}
                      className="productListImage"
                      onError={(event) =>
                        (event.target.src = '../images/products/default.jpg')
                      }
                    />
                  </div>

                  <div className={view === 'list' ? 'col-md p-3' : ''}>
                    <h3>{product.ProductName}</h3>
                    <div className={view === 'list' ? 'row' : ''}>
                      <div className={view === 'list' ? 'col-6' : ''}>
                        <Rating
                          name="size-small"
                          value={product.avgRate ? Number(product.avgRate) : 0}
                          size="small"
                          precision={0.1}
                          readOnly
                        />
                        <p>人氣:{' ' + product.visitedTimes}</p>
                        <p>
                          銷量:
                          {product.sellingVolume === null
                            ? ' 0'
                            : ' ' + product.sellingVolume}
                        </p>
                      </div>
                      <div className={view === 'list' ? 'col-6' : ''}>
                        {product.discount !== null ? (
                          <>
                            <p>
                              原價:
                              <span className="originalPrice">
                                {' ' + product.UnitPrice}
                              </span>
                            </p>
                            <p>
                              特價:
                              <span className="specialPrice">
                                {' ' + product.finalPrice}
                              </span>
                            </p>
                          </>
                        ) : (
                          <p>售價:{' ' + product.UnitPrice}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-inline favouriteAndCartButton">
                    {/* cart button */}
                    {product.num == null ? (
                      <Tooltip title="加入購物車">
                        <button
                          className="btn btn-sm btn-primary m-1"
                          onClick={(e) => {
                            e.preventDefault()
                            async function add() {
                              await AddProductToCart(
                                product.productID,
                                memberID
                              )
                              await getProductList(page, memberID, query)
                              await getCartNum(memberID)
                            }
                            add()
                          }}
                        >
                          <AddShoppingCartIcon fontSize="small" />
                        </button>
                      </Tooltip>
                    ) : (
                      <Tooltip title="從購物車中移除">
                        <button
                          className="btn btn-sm btn-danger m-1"
                          onClick={(e) => {
                            e.preventDefault()
                            async function remove() {
                              await removeProductFromCart(
                                product.productID,
                                memberID
                              )
                              await getProductList(page, memberID, query)
                              await getCartNum(memberID)
                            }
                            remove()
                          }}
                        >
                          <RemoveShoppingCartIcon fontSize="small" />(
                          {product.num})
                        </button>
                      </Tooltip>
                    )}
                    {/* favourite button */}

                    {product.favouriteID === null ? (
                      <Tooltip title="加到我的最愛">
                        <button
                          className="btn btn-sm btn-primary m-1"
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
                          <FavoriteIcon fontSize="small" />
                        </button>
                      </Tooltip>
                    ) : (
                      <Tooltip title="從我的最愛移除">
                        <button
                          className="btn btn-sm btn-danger m-1"
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
                          <FavoriteBorderIcon fontSize="small" />
                        </button>
                      </Tooltip>
                    )}
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
              setShowZoom(false)
              document.documentElement.scrollTop = 0
            }}
          >
            {page}
          </Pagination.Item>
        )
    }
  })

  let categoryName = ''
  switch (category) {
    case 0:
      break
    case 1:
      categoryName = '咖啡豆'
      break
    case 2:
      categoryName = '即溶咖啡'
      break
    case 3:
      categoryName = '咖啡膠囊'
      break
    case 4:
      categoryName = '濾掛包'
      break
    case 5:
      categoryName = '濾紙'
      break
    case 6:
      categoryName = '烘培機'
      break
    case 7:
      categoryName = '磨豆機'
      break
    case 8:
      categoryName = '咖啡機'
      break
    default:
  }

  categoryName = categoryName ? (
    <li className="breadcrumb-item active" aria-current="page">
      <Link to="#">{categoryName}</Link>
    </li>
  ) : (
    ''
  )

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-5">
            <ProductListSidebar />
          </div>
          <div className="col-md-9 mt-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="">首頁</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link
                    to="#"
                    onClick={() => {
                      setCategory(0)
                    }}
                  >
                    產品資訊
                  </Link>
                </li>
                {categoryName}
              </ol>
            </nav>
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
                        localStorage.setItem(
                          'searchRecord',
                          JSON.stringify(searchRecord)
                        )
                      }
                    }}
                    onInputChange={(event, newInputValue) => {
                      setKeyword(newInputValue)
                      setShowZoom(false)
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
                        setShowZoom(false)
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
                    <div className="col-md-6 p-4">
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
                          setShowZoom(false)
                        }}
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <div className="col-md-6 p-4">
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
                              setShowZoom(false)
                            } else {
                              setPriceRange([priceRange[1], inputValue])
                              setShowZoom(false)
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
                              setShowZoom(false)
                            } else {
                              setPriceRange([inputValue, priceRange[0]])
                              setShowZoom(false)
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
                  <div className="row">
                    <div className="col-12">
                      <Typography>評分必須高於</Typography>
                      <Rating
                        value={rate}
                        onChange={(event, newValue) => {
                          setRate(newValue)
                          setShowZoom(false)
                        }}
                      />
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
                      onChange={(event) => {
                        setAdvanceSearch(event.target.checked)
                        setShowZoom(false)
                      }}
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
                <div className="d-flex justify-content-start mb-3 col-md">
                  <FormControl>
                    <InputLabel htmlFor="orderBy">排序方式</InputLabel>
                    <Select
                      native
                      value={orderBy}
                      onChange={(event) => {
                        setOrderBy(event.target.value)
                        setShowZoom(false)
                        if (
                          orderBy === 'visitedTimes DESC' ||
                          orderBy === 'sellingVolume DESC' ||
                          orderBy === 'avgRate DESC' ||
                          orderBy === 'countComment DESC'
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
                      <option value={'avgRate DESC'}>評分最高</option>
                      <option value={'countComment DESC'}>最多評論</option>
                    </Select>
                  </FormControl>
                  {orderBy === 'visitedTimes DESC' ||
                  orderBy === 'sellingVolume DESC' ||
                  orderBy === 'avgRate DESC' ||
                  orderBy === 'countComment DESC' ? (
                    <FormControl className="ml-3">
                      <InputLabel htmlFor="period">時間</InputLabel>
                      <Select
                        native
                        value={period}
                        onChange={(event) => {
                          setPeriod(event.target.value)
                          setShowZoom(false)
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
                <p className="d-flex justify-content-end mb-3 align-self-end col-md">
                  第 {range.page} 頁( {rowStart} - {rowEnd} )，共{' '}
                  {range.totalPages}頁{range.totalRows} 項
                </p>
              </div>
              <div className="row d-flex justify-content-end pr-3">
                <ButtonGroup color="primary" variant="contained" size="small">
                  <Button
                    onClick={() => {
                      setView('list')
                      localStorage.setItem('view', 'list')
                      setShowZoom(false)
                    }}
                  >
                    <ViewListIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      setView('block')
                      localStorage.setItem('view', 'block')
                      setShowZoom(false)
                    }}
                  >
                    <ViewModuleIcon />
                  </Button>
                </ButtonGroup>
              </div>

              <div
                className={
                  view === 'list'
                    ? ''
                    : 'd-flex align-content-start justify-content-around flex-wrap'
                }
              >
                {productListMain}
              </div>
              <Pagination className="justify-content-center mt-5 ">
                <Pagination.First
                  onClick={() => {
                    setPage(1)
                    setShowZoom(false)
                    document.documentElement.scrollTop = 0
                  }}
                />
                <Pagination.Prev
                  onClick={() => {
                    setPage(range.page > 1 ? range.page - 1 : 1)
                    setShowZoom(false)
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
                    setShowZoom(false)
                    document.documentElement.scrollTop = 0
                  }}
                />
                <Pagination.Last
                  onClick={() => {
                    setPage(range.totalPages)
                    setShowZoom(false)
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
    fromOtherPages: state.ProductListReducer.fromOtherPages,
  }
}

export default connect(mapStateToProps, {
  getProductList,
  setQuery,
  setKeyword,
  setColumn,
  setCategory,
  getCartNum,
  AddProductToCart,
  removeProductFromCart,
  AddProductToFavourite,
  removeProductFromFavourite,
})(ProductList)
