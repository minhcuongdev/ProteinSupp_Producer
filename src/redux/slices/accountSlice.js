import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSignIn: false,
  account: null
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, actions) => {
      state.account = actions.payload
    },
    login: (state, actions) => {
      state.account = actions.payload
      state.isSignIn = true
    },
    logout: (state) => {
      state.account = null
      state.isSignIn = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, setAccount} = accountSlice.actions

const accountReducer = accountSlice.reducer

export default accountReducer