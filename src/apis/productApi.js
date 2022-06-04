import axiosClient from "./axiosClient";

const productApi =  {
    getAllProduct() {
        return axiosClient.get('products/')
    },
}

export default productApi