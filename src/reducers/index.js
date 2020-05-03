import ProductListReducer from './ProductListReducer'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'
import CartNumReducer from './CartNumReducer'
import PurchaseFormReducer from './PurchaseFormReducer'
import MemberInfoReducer from './MemberInfoReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ProductReducer,
  ProductListReducer,
  CartReducer,
  CartNumReducer,
  PurchaseFormReducer,
  MemberInfoReducer,
})
