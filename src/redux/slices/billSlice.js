import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash"

const initialState = {
  bills: [],
  bill: {}
}

export const billSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    setBills: (state, actions) => {
      state.bills = actions.payload
    },
    updateStatusBill: (state, actions) => {
      const cloneBills = _.cloneDeep(state.bills)
      cloneBills.map(bill => {
        if(bill._id === actions.payload._id) bill.status = actions.payload.status
      })
      state.bills = cloneBills
    },
    getBillById: (state, actions) => {
      const billId = actions.payload
      const bill = state.bills.filter(bill => bill._id === billId)
      state.bill = bill[0]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBills, getBillById, updateStatusBill } = billSlice.actions

const billReducer = billSlice.reducer

export default billReducer