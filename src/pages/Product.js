import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { getMemberID } from '../actions/getMemberID'

import { connect } from 'react-redux'
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

function Product(props) {
  let { id } = useParams()

  const {
    product,
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
  } = props

  const memberID = getMemberID()

  useEffect(() => {
    async function start() {
      await recordVisit(id, memberID)
      await getProduct(id, memberID)
    }
    start()
  }, [getProduct, id, memberID, recordVisit])

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
    <Link className="mx-1" key={i} to="#">
      {tag}
    </Link>
  ))

  // about comments

  const averagedRate = (
    product.comments.reduce((a, b) => a + b.rate, 0) / product.comments.length
  ).toFixed(1)

  const numOf5star = product.comments.filter((comment) => comment.rate === 5)
    .length
  const numOf4star = product.comments.filter((comment) => comment.rate === 4)
    .length
  const numOf3star = product.comments.filter((comment) => comment.rate === 3)
    .length
  const numOf2star = product.comments.filter((comment) => comment.rate === 2)
    .length
  const numOf1star = product.comments.filter((comment) => comment.rate === 1)
    .length

  let checkCommented = false
  product.comments.forEach((comment) => {
    if (comment.customerID === memberID) checkCommented = true
  })

  const commentOfLoggedID = checkCommented ? (
    product.comments.map((comment, i) => {
      return comment.customerID === memberID ? (
        <div key={i}>
          <CardSecondary>
            <p>ID:{comment.customerID}</p>

            <div className="form-group">
              <label htmlFor="rateInput">rate:</label>
              <input
                type="number"
                className="form-control"
                id="rateInput"
                defaultValue={comment.rate}
                onChange={(event) => {
                  event.target.value = Math.round(event.target.value)
                  if (event.target.value < 1 && event.target.value !== null)
                    event.target.value = 1
                  if (event.target.value > 5 && event.target.value !== null)
                    event.target.value = 5
                }}
              />

              <label htmlFor="commentInput">Comment:</label>
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
                  const rate = document.getElementById('rateInput').value
                  const comment = document.getElementById('commentInput').value
                  async function Update() {
                    UpdateComment(product.productID, memberID, rate, comment)
                    await getProduct(id, memberID)
                  }
                  Update()
                }}
              >
                edit
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={(e) => {
                  e.preventDefault()
                  async function Remove() {
                    RemoveComment(product.productID, memberID)
                    await getProduct(id, memberID)
                  }
                  Remove()
                }}
              >
                delete
              </button>
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
        <div className="form-group">
          <label htmlFor="rateInput">rate:</label>
          <input
            type="number"
            className="form-control"
            id="rateInput"
            onChange={(event) => {
              event.target.value = Math.round(event.target.value)
              if (event.target.value < 1 && event.target.value !== null)
                event.target.value = 1
              if (event.target.value > 5 && event.target.value !== null)
                event.target.value = 5
            }}
          />

          <label htmlFor="commentInput">Comment:</label>
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
              const rate = document.getElementById('rateInput').value
              const comment = document.getElementById('commentInput').value
              async function add() {
                AddComment(product.productID, memberID, rate, comment)
                await getProduct(id, memberID)
              }
              add()
            }}
          >
            add
          </button>
        </div>
      </CardSecondary>
    </div>
  )

  const otherComments = product.comments.map((comment, i) => {
    return comment.customerID !== memberID ? (
      <div key={i}>
        <CardSecondary>
          <p>ID:{comment.customerID}</p>
          <p>rate:{comment.rate}</p>
          <p>comment:{comment.commentText}</p>
        </CardSecondary>
      </div>
    ) : (
      <div key={i}></div>
    )
  })

  return (
    <>
      <div className="topSpace"></div>
      <CardSecondary>
        <h2>產品名稱：{product.ProductName}</h2>
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
            className="form-control"
            placeholder="Enter Number"
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
            <>
              <button
                className="btn btn-primary m-1"
                onClick={(e) => {
                  e.preventDefault()
                  const num = document.getElementById('order_num').value
                  async function add() {
                    await AddProductToCart(product.productID, memberID, num)
                    await getProduct(id, memberID)
                  }
                  add()
                }}
              >
                add
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-success m-1"
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
                  }
                  update()
                }}
              >
                update
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={(e) => {
                  e.preventDefault()
                  async function remove() {
                    await removeProductFromCart(product.productID, memberID)
                    await getProduct(id, memberID)
                  }
                  remove()
                  document.getElementById('order_num').value = 1
                }}
              >
                remove({product.num})
              </button>
            </>
          )}
          {product.favouriteID === null ? (
            <button
              className="btn btn-primary m-1"
              onClick={(e) => {
                e.preventDefault()
                async function add() {
                  await AddProductToFavourite(product.productID, memberID)
                  await getProduct(id, memberID)
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
                  await removeProductFromFavourite(product.productID, memberID)
                  await getProduct(id, memberID)
                }

                remove()
              }}
            >
              remove from favourite
            </button>
          )}
        </div>
      </CardSecondary>
      <CardSecondary>
        <p>
          average of rate：
          {isNaN(averagedRate) ? '目前沒有評分' : averagedRate}
        </p>
        <p>5 star：{numOf5star}</p>
        <p>4 star：{numOf4star}</p>
        <p>3 star：{numOf3star}</p>
        <p>2 star：{numOf2star}</p>
        <p>1 star：{numOf1star}</p>
      </CardSecondary>
      {commentOfLoggedID}
      {otherComments}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.ProductReducer.item,
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
})(Product)
