import axiosClient from "./axiosClient";

const userApi =  {
    updateInfoUser(idUser, payload) {
        return axiosClient.put(`/user/${idUser}`, payload)
    },
    
}

export default userApi