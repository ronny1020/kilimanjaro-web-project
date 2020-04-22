import ProductListReducer from './ProductListReducer'
import ProductReducer from './ProductReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ProductReducer,
  ProductListReducer,
})
