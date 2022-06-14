import axiosClient from "./axiosClient";

const billApi = {
  getAllBill() {
    return axiosClient.get('bills/')
  },
  updateStatusBill(billId, status) {
    return axiosClient.put(`/bills/${billId}`, {status:status })
  }
}

export default billApi