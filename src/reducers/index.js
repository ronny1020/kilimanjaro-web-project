import ProductListReducer from './ProductListReducer'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'
import CartNumReducer from './CartNumReducer'
import PurchaseFormReducer from './PurchaseFormReducer'
import MemberInfoReducer from './MemberInfoReducer'
import CouponReducer from './CouponReducer'
import PopularProductsReducer from './PopularProductsReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ProductReducer,
  ProductListReducer,
  CartReducer,
  CartNumReducer,
  PurchaseFormReducer,
  MemberInfoReducer,
  CouponReducer,
  PopularProductsReducer,
})
