import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  title: null
}

export const snackBarSlice = createSlice({
  name: 'snackBar',
  initialState,
  reducers: {
    setSnackBar: (state, actions) => {
      state.open = actions.payload.open
      state.title = actions.payload.title
    },
    setOffSnackBar: (state) => {
      state.open = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSnackBar, setOffSnackBar } = snackBarSlice.actions

const snackBarReducer = snackBarSlice.reducer

export default snackBarReducer