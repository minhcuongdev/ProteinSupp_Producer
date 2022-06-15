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
      const newList = state.products.filter(p => p._id !== actions.payload)
      state.products = newList;
    },
    updateProduct: (state, actions) => {
      const updatePr = actions.payload;
      state.products.map(product => {
        if(product._id === updatePr._id) {
          product.name = updatePr.name,
          product.price = updatePr.price,
          product.description = updatePr.description,
          product.origin = updatePr.origin,
          product.manufacturer = updatePr.manufacturer,
          product.manufacturerPrice = updatePr.manufacturerPrice
          product.imageProduct = updatePr.imageProduct
        }
      })
      state.product = updatePr
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, getProductById, setProduct, deleteProduct, updateProduct } = productSlice.actions

const productReducer = productSlice.reducer

export default productReducer