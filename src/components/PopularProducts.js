import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPopularProducts } from '../actions/PopularProductsAction'

import ProductListItem from './ProductList/productListItem'

import { Link } from 'react-router-dom'
import { getMemberID } from '../actions/getMemberID'
import { AddProductToCart, removeProductFromCart } from '../actions/CartAction'
import { getCartNum } from '../actions/CartAction'
import { getCart } from '../actions/CartAction'
import {
  AddProductToFavourite,
  removeProductFromFavourite,
} from '../actions/FavouriteAction'

import Zoom from '@material-ui/core/Zoom'

import Rating from '@material-ui/lab/Rating'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import Tooltip from '@material-ui/core/Tooltip'
import Loading from './Loading'
import { getProduct } from '../actions/getProduct'

function PopularProducts(props) {
  const {
    getPopularProducts,
    popularProducts,
    AddProductToFavourite,
    removeProductFromFavourite,
    AddProductToCart,
    removeProductFromCart,
    getCartNum,
    getProduct,
    getCart,
  } = props
  const memberID = getMemberID()

  const page = props.page
  const id = props.id

  useEffect(() => {
    getPopularProducts(memberID)
  }, [getPopularProducts, memberID])

  if (popularProducts === undefined) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </>
    )
  }

  const popularProductsMain = popularProducts.map((product, i) => {
    return (
      <div key={i}>
        <Zoom
          in={true}
          style={{
            transformOrigin: '0 0 0',
            transitionDelay: true ? 300 * i + 'ms' : '0ms',
          }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <div>
            <Link
              to={'../product/' + product.productID}
              className="linkNoUnderline"
              onClick={() => {
                document.body.scrollTop = 0 // For Safari
                document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
              }}
            >
              <ProductListItem>
                <div className="productListBlockView">
                  <div>
                    <img
                      alt=""
                      src={'../images/products/' + product.productID + '/0.jpg'}
                      className="productListImage"
                      onError={(event) =>
                        (event.target.src = '../images/products/default.jpg')
                      }
                    />
                  </div>

                  <div>
                    <h3>{product.ProductName}</h3>
                    <div>
                      <div>
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
                      <div>
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
                    {/* favourite button */}

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
                              await getPopularProducts(memberID)
                              await getCartNum(memberID)
                              if (page === 'product') {
                                await getProduct(id, memberID)
                              } else {
                                await getCart(memberID)
                              }
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
                              await getPopularProducts(memberID)
                              await getCartNum(memberID)
                              if (page === 'product') {
                                await getProduct(id, memberID)
                              } else {
                                await getCart(memberID)
                              }
                            }
                            remove()
                          }}
                        >
                          <RemoveShoppingCartIcon fontSize="small" />(
                          {product.num})
                        </button>
                      </Tooltip>
                    )}
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
                              await getPopularProducts(memberID)
                              if (page === 'product') {
                                await getProduct(id, memberID)
                              } else {
                                await getCart(memberID)
                              }
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
                              await getPopularProducts(memberID)
                              if (page === 'product') {
                                await getProduct(id, memberID)
                              } else {
                                await getCart(memberID)
                              }
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

  return (
    <div className="d-flex align-content-start justify-content-around flex-wrap">
      {popularProductsMain}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    popularProducts: state.PopularProductsReducer.items.ProductList,
  }
}

export default connect(mapStateToProps, {
  getPopularProducts,
  AddProductToFavourite,
  removeProductFromFavourite,
  AddProductToCart,
  removeProductFromCart,
  getCartNum,
  getProduct,
  getCart,
})(PopularProducts)
