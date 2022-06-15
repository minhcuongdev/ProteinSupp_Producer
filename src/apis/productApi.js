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
    },
    updateProduct(productId, payload) {
        return axiosClient.put(`products/${productId}`, payload)
    }
}

export default productApi