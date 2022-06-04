import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice'
import snackBarReducer from './slices/snackBarSlice'
import productReducer from './slices/productSlice'

export const store = configureStore({
  reducer: {
    account: accountReducer,
    snackBar: snackBarReducer,
    product: productReducer
  },
})