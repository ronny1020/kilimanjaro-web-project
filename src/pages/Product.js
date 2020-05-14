import React, { useEffect } from 'react'

import { setCategory } from '../actions/getProductList'
import { useHistory, Link, useParams } from 'react-router-dom'

import Loading from '../components/Loading'

import { getMemberID } from '../actions/getMemberID'
import { getCartNum } from '../actions/CartAction'

import { getPopularProducts } from '../actions/PopularProductsAction'

import { connect } from 'react-redux'

import { HorizontalBar } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2'

import { recordVisit, getProduct } from '../actions/getProduct'
import {
  AddProductToCart,
  removeProductFromCart,
  updateProductNumToCart,
} from '../actions/CartAction'

import {
  AddComment,
  UpdateComment,
  RemoveComment,
} from '../actions/CommentsAction'

import {
  AddProductToFavourite,
  removeProductFromFavourite,
} from '../actions/FavouriteAction'

import CardSecondary from '../components/CardSecondary'

import Rating from '@material-ui/lab/Rating'
import Chip from '@material-ui/core/Chip'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import { setKeyword, setColumn } from '../actions/getProductList'
import ProductImageStepper from '../components/Product/ProductImageStepper'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import EditIcon from '@material-ui/icons/Edit'

import Tooltip from '@material-ui/core/Tooltip'
import PopularProducts from '../components/PopularProducts'

import DateStyle from '../components/DateStyle'

function Alert(props) {
  return <MuiAlert elevation={6} {...props} />
}

function Product(props) {
  let history = useHistory()
  let { id } = useParams()

  const {
    product,
    recordVisit,
    getProduct,
    setKeyword,
    setColumn,
    AddProductToCart,
    removeProductFromCart,
    updateProductNumToCart,
    AddComment,
    UpdateComment,
    RemoveComment,
    AddProductToFavourite,
    removeProductFromFavourite,
    setCategory,
    getCartNum,
    getPopularProducts,
  } = props

  const memberID = getMemberID()

  const [rate, setRate] = React.useState(0)

  const [dataArray, setDataArray] = React.useState([0, 0, 0, 0, 0])

  const [numOfCommentShowed, setNumOfCommentShowed] = React.useState(2)
  // Control Alert
  const [editAlertOpen, setEditAlertOpen] = React.useState(false)
  const handleEditAlertClick = () => {
    setEditAlertOpen(true)
  }
  const handleEditAlertClose = (event, reason) => {
    setEditAlertOpen(false)
  }

  // delete
  const [deleteAlertOpen, setDeleteAlertOpen] = React.useState(false)
  const handleDeleteAlertClick = () => {
    setDeleteAlertOpen(true)
  }
  const handleDeleteAlertClose = (event, reason) => {
    setDeleteAlertOpen(false)
  }

  // add
  const [addAlertOpen, setAddAlertOpen] = React.useState(false)
  const handleAddAlertClick = () => {
    setAddAlertOpen(true)
  }
  const handleAddAlertClose = (event, reason) => {
    setAddAlertOpen(false)
  }

  // error
  const [errorAlertOpen, setErrorAlertOpen] = React.useState(false)
  const handleErrorAlertClick = () => {
    setErrorAlertOpen(true)
  }
  const handleErrorAlertClose = (event, reason) => {
    setErrorAlertOpen(false)
  }

  useEffect(() => {
    async function start() {
      await recordVisit(id, memberID)
      await getProduct(id, memberID)
    }
    start()
  }, [getProduct, id, memberID, recordVisit])

  useEffect(() => {
    if (product.length !== 0) {
      let defaultRate
      product.comments.forEach((comment) => {
        if (comment.customerID === memberID) {
          defaultRate = comment.rate
        }
      })
      setRate(defaultRate)

      setDataArray([
        product.comments.filter((comment) => comment.rate === 5).length,
        product.comments.filter((comment) => comment.rate === 4).length,
        product.comments.filter((comment) => comment.rate === 3).length,
        product.comments.filter((comment) => comment.rate === 2).length,
        product.comments.filter((comment) => comment.rate === 1).length,
      ])
    }
  }, [memberID, product])

  if (product.productID === undefined) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </>
    )
  }

  if (product.productID === 'not found') {
    return (
      <>
        <div className="container m-5 p-5">
          <h4>對不起，找不到該項商品</h4>
        </div>
      </>
    )
  }

  const tagsLink = product.tags.map((tag, i) => (
    <Chip
      label={tag}
      className="m-1"
      component="a"
      clickable
      variant="outlined"
      key={i}
      onClick={() => {
        setKeyword(tag)
        setColumn('tag')
        document.documentElement.scrollTop = 0
        history.push('/productList')
      }}
    />
  ))

  // about comments
  defaults.global.defaultFontSize = 16
  defaults.global.defaultFontFamily = "'Noto Sans TC', sans-serif"

  const chartData = {
    labels: ['5', '4', '3', '2', '1'],
    datasets: [
      {
        label: '評分',
        backgroundColor: '#6e8080',
        borderWidth: 0,
        hoverBackgroundColor: '#a3d3d7',
        data: dataArray,
      },
    ],
  }

  const xAxesMax = Math.max(...dataArray) + 1
  const chartOptions = {
    legend: { display: false },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            suggestedMax: xAxesMax,
          },
        },
      ],
    },
  }

  let checkCommented = false
  product.comments.forEach((comment) => {
    if (comment.customerID === memberID) checkCommented = true
  })

  // comment of logged ID rate & comments function

  const commentOfLoggedID = checkCommented ? (
    product.comments.map((comment, i) => {
      return comment.customerID === memberID ? (
        <div key={i}>
          <CardSecondary>
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center align-self-center">
                <img
                  src={'http://localhost:6001/api/image/' + comment.customerID}
                  alt="NoImage"
                  className="commentsImage rounded-circle img-thumbnail"
                  onError={(event) => {
                    event.target.src = '../../images/interface.svg'
                  }}
                ></img>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <p className="col-auto">{comment.cAccount}</p>
                  <p className="col-auto ml-auto">
                    {DateStyle(new Date(comment.addTime).toString())}
                  </p>
                </div>
                <div className="form-group">
                  <Rating
                    name="simple-controlled"
                    id="rateInput"
                    value={rate ? Number(rate) : 0}
                    onChange={(event, newValue) => {
                      setRate(newValue)
                    }}
                  />
                  <br />
                  <label htmlFor="commentInput">評論:</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="commentInput"
                    defaultValue={comment.commentText}
                  ></textarea>
                </div>
                <div className="form-inline">
                  <button
                    className="btn btn-success m-1"
                    onClick={(e) => {
                      e.preventDefault()
                      const comment = document.getElementById('commentInput')
                        .value
                      async function Update() {
                        await UpdateComment(
                          product.productID,
                          memberID,
                          rate,
                          comment
                        )
                        await getProduct(id, memberID)
                        handleEditAlertClick()
                      }
                      Update()
                    }}
                  >
                    編輯
                  </button>

                  <button
                    className="btn btn-danger m-1"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('commentInput').value = 0
                      setRate()
                      async function Remove() {
                        await RemoveComment(product.productID, memberID)
                        await getProduct(id, memberID)
                        handleDeleteAlertClick()
                      }
                      Remove()
                    }}
                  >
                    刪除
                  </button>
                </div>
              </div>
            </div>
          </CardSecondary>
        </div>
      ) : (
        <div key={i}></div>
      )
    })
  ) : (
    <div>
      <CardSecondary>
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center align-self-center">
            <img
              src={'http://localhost:6001/api/image/' + memberID}
              alt="NoImage"
              className="commentsImage rounded-circle img-thumbnail"
              onError={(event) => {
                event.target.src = '../../images/interface.svg'
              }}
            ></img>
          </div>
          <div className="col-md-9">
            <div className="form-group">
              <Rating
                name="simple-controlled"
                id="rateInput"
                value={rate ? Number(rate) : 0}
                onChange={(event, newValue) => {
                  setRate(newValue)
                }}
              />
              <br />
              <label htmlFor="commentInput">評論:</label>
              <textarea
                className="form-control"
                rows="5"
                id="commentInput"
              ></textarea>
            </div>
            <div className="form-inline">
              <button
                className="btn btn-primary m-1"
                onClick={(e) => {
                  e.preventDefault()
                  const comment = document.getElementById('commentInput').value
                  async function add() {
                    await AddComment(product.productID, memberID, rate, comment)
                    await getProduct(id, memberID)
                    if (memberID) handleAddAlertClick()
                  }
                  if (rate && comment) {
                    add()
                  } else {
                    handleErrorAlertClick()
                  }
                }}
              >
                新增
              </button>
            </div>
          </div>
        </div>
      </CardSecondary>
    </div>
  )
  // remove logged id
  const productOtherComments = product.comments.filter(
    (comment) => comment.customerID !== memberID
  )

  const otherComments = productOtherComments.map((comment, i) => {
    return i <= numOfCommentShowed ? (
      <div key={i}>
        <CardSecondary>
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center align-self-center">
              <img
                src={'http://localhost:6001/api/image/' + comment.customerID}
                alt="NoImage"
                className="commentsImage rounded-circle img-thumbnail"
                onError={(event) => {
                  event.target.src = '../../images/interface.svg'
                }}
              ></img>
            </div>
            <div className="col-md-9">
              <div className="row">
                <p className="col-auto">{comment.cAccount}</p>
                <p className="col-auto ml-auto">
                  {DateStyle(new Date(comment.addTime).toString())}
                </p>
              </div>
              {comment.rate ? (
                <Rating
                  defaultValue={Number(comment.rate)}
                  size="small"
                  readOnly
                />
              ) : (
                <></>
              )}
              <div className="white-space-pre">{comment.commentText}</div>
            </div>
          </div>
        </CardSecondary>
      </div>
    ) : (
      <div key={i}></div>
    )
  })

  return (
    <>
      <div className="topSpace"></div>
      <nav aria-label="breadcrumb" className="container px-0">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="">首頁</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link
              to="../productList"
              onClick={() => {
                setKeyword('')
                setColumn('')
                setCategory(0)
              }}
            >
              產品資訊
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link
              to="../productList"
              onClick={() => {
                setKeyword('')
                setColumn('')
                setCategory(product.CategoryID)
              }}
            >
              {product.categoryName}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="#">{product.ProductName}</Link>
          </li>
        </ol>
      </nav>

      <CardSecondary>
        <div className="row">
          <div className="col-md-6">
            <ProductImageStepper productID={product.productID} />
          </div>
          <div className="col-md-6">
            <h2>{product.ProductName}</h2>
            <br />
            <p>廠商：{product.sName}</p>
            <p>類別：{product.categoryName}</p>
            <p>價格：{product.UnitPrice}</p>
            {product.discount !== null ? (
              <p>special price:{product.UnitPrice - product.discount}</p>
            ) : (
              <p></p>
            )}
            <p>庫存：{product.UnitsInStock}</p>
            <p>人氣：{product.visitedTimes}</p>
            <p>Tags：{tagsLink}</p>
            <div className="form-inline">
              <label htmlFor="order_num" className="m-1">
                數量：
              </label>
              <input
                type="number"
                className="form-control w-25"
                id="order_num"
                defaultValue={product.num}
                onChange={(event) => {
                  event.target.value = Math.round(event.target.value)
                  if (event.target.value < 1) event.target.value = 1
                  if (event.target.value > product.UnitsInStock)
                    event.target.value = product.UnitsInStock
                }}
              />
              {product.num == null ? (
                <Tooltip title="加入購物車">
                  <button
                    className="btn btn-sm btn-primary m-1"
                    onClick={(e) => {
                      e.preventDefault()
                      const num = document.getElementById('order_num').value
                      async function add() {
                        await AddProductToCart(product.productID, memberID, num)
                        await getProduct(id, memberID)
                        await getCartNum(memberID)
                        await getPopularProducts(memberID)
                      }
                      add()
                    }}
                  >
                    <AddShoppingCartIcon fontSize="small" />
                  </button>
                </Tooltip>
              ) : (
                <Tooltip title="修改訂購數量">
                  <button
                    className="btn btn-sm btn-success m-1"
                    onClick={(e) => {
                      e.preventDefault()
                      async function update() {
                        const num = document.getElementById('order_num').value
                        await updateProductNumToCart(
                          product.productID,
                          memberID,
                          num
                        )
                        await getProduct(id, memberID)
                        await getPopularProducts(memberID)
                      }
                      update()
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </button>
                </Tooltip>
              )}
            </div>
            <div className="form-inline favouriteAndCartButton">
              {product.UnitsInStock ? (
                <>
                  {product.num === null ? (
                    <> </>
                  ) : (
                    <>
                      <Tooltip title="從購物車中移除">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={(e) => {
                            e.preventDefault()
                            async function remove() {
                              await removeProductFromCart(
                                product.productID,
                                memberID
                              )
                              await getProduct(id, memberID)
                              await getCartNum(memberID)
                              await getPopularProducts(memberID)
                            }
                            remove()
                            document.getElementById('order_num').value = 1
                          }}
                        >
                          <RemoveShoppingCartIcon fontSize="small" />(
                          {product.num})
                        </button>
                      </Tooltip>
                    </>
                  )}
                </>
              ) : (
                <p>很抱歉，目前沒有庫存</p>
              )}
              {product.favouriteID === null ? (
                <Tooltip title="加到我的最愛">
                  <button
                    className="btn btn-sm btn-primary m-1"
                    onClick={(e) => {
                      e.preventDefault()
                      async function add() {
                        await AddProductToFavourite(product.productID, memberID)
                        await getProduct(id, memberID)
                        await getPopularProducts(memberID)
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
                        await getProduct(id, memberID)
                        await getPopularProducts(memberID)
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
        </div>
      </CardSecondary>
      <CardSecondary>
        <div className="row">
          <div className="col-8">
            <HorizontalBar data={chartData} options={chartOptions} />
          </div>
          <div className="col-4">
            {product.avgRate === null ? (
              '目前沒有評分'
            ) : (
              <div className="d-flex flex-column align-items-center justify-content-center">
                <p className="averagedRate">
                  {product.avgRate % 1 === 0
                    ? Number(product.avgRate) + '.0'
                    : Math.round(product.avgRate * 10) / 10}
                </p>

                <Rating
                  value={Number(product.avgRate)}
                  precision={0.1}
                  size="large"
                  readOnly
                />
              </div>
            )}
          </div>
        </div>
      </CardSecondary>

      {commentOfLoggedID}
      {otherComments}
      {numOfCommentShowed < otherComments.length ? (
        <div className="d-flex justify-content-center">
          <button
            className=" btn btn-primary m-3"
            onClick={() => {
              setNumOfCommentShowed(numOfCommentShowed + 3)
            }}
          >
            顯示更多
          </button>
          <button
            className=" btn btn-primary m-3"
            onClick={() => {
              setNumOfCommentShowed(otherComments.length)
            }}
          >
            顯示全部
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">商品規格</h4>
        </div>
      </div>
      <CardSecondary>
        <div className="white-space-pre">{product.specification}</div>
      </CardSecondary>
      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">商品介紹</h4>
        </div>
      </div>
      <CardSecondary className="white-space-pre">
        <div className="white-space-pre">{product.description}</div>
      </CardSecondary>

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">人氣商品</h4>
        </div>
      </div>
      <div className="container p-0">
        <PopularProducts page="product" id={id} />
      </div>

      {/* alert snackbar */}
      <Snackbar
        open={editAlertOpen}
        autoHideDuration={6000}
        onClose={handleEditAlertClose}
      >
        <Alert onClose={handleEditAlertClose} severity="success">
          您已成功編輯
        </Alert>
      </Snackbar>
      <Snackbar
        open={addAlertOpen}
        autoHideDuration={6000}
        onClose={handleAddAlertClose}
      >
        <Alert onClose={handleAddAlertClose} severity="success">
          您已成功新增
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorAlertOpen}
        autoHideDuration={6000}
        onClose={handleErrorAlertClose}
      >
        <Alert onClose={handleErrorAlertClose} severity="error">
          您尚未評分或留言
        </Alert>
      </Snackbar>
      <Snackbar
        open={deleteAlertOpen}
        autoHideDuration={6000}
        onClose={handleDeleteAlertClose}
      >
        <Alert onClose={handleDeleteAlertClose} severity="error">
          您已成功刪除
        </Alert>
      </Snackbar>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.ProductReducer.item,
    popularProducts: state.PopularProductsReducer.items.ProductList,
  }
}

export default connect(mapStateToProps, {
  recordVisit,
  getProduct,
  AddProductToCart,
  removeProductFromCart,
  updateProductNumToCart,
  AddComment,
  UpdateComment,
  RemoveComment,
  AddProductToFavourite,
  removeProductFromFavourite,
  setKeyword,
  setColumn,
  setCategory,
  getCartNum,
  getPopularProducts,
})(Product)
