import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice'
import snackBarReducer from './slices/snackBarSlice'
import productReducer from './slices/productSlice'
import billReducer from './slices/billSlice'

export const store = configureStore({
  reducer: {
    account: accountReducer,
    snackBar: snackBarReducer,
    product: productReducer,
    bill: billReducer
  },
})