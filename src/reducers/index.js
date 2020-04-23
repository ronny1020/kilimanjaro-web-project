import ProductListReducer from './ProductListReducer'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ProductReducer,
  ProductListReducer,
  CartReducer,
})
