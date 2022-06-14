import axiosClient from "./axiosClient";

const productApi =  {
    getAllProduct() {
        return axiosClient.get('products/')
    },
    createProduct(payload) {
        return axiosClient.post('products/', payload)
    },
    deleteProduct(productId) {
        return axiosClient.delete(`products/${productId}`)
    }
}

export default productApi