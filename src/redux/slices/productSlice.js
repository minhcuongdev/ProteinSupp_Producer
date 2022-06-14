import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {}
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload
    },
    getProductById: (state, actions) => {
      const productId = actions.payload
      const product = state.products.filter(product => product._id === productId)
      state.product = product[0]
    },
    setProduct: (state, actions) => {
      state.products = [actions.payload,...state.products] 
    },
    deleteProduct: (state, actions) => {
      state.products = state.products.filter(p => p._id !== actions.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, getProductById, setProduct, deleteProduct } = productSlice.actions

const productReducer = productSlice.reducer

export default productReducer