import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  promotionalProducts: [],
  product: {}
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload
    },
    setPromotionalProducts: (state, actions) => {
      state.promotionalProducts = actions.payload
    },
    getProductById: (state, actions) => {
      const productId = actions.payload
      const product = state.products.filter(product => product._id === productId)
      state.product = product[0]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, setPromotionalProducts, getProductById } = productSlice.actions

const productReducer = productSlice.reducer

export default productReducer