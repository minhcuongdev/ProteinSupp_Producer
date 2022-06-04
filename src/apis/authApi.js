import axiosClient from "./axiosClient";

const authApi =  {
    login(account) {
        return axiosClient.post('/auth/login?admin=true', {
            email: account.email,
            password: account.password
        })
    },
    logout(refreshToken) {
        return axiosClient.post('/auth/logout',{
            refreshToken
        })
    }
}

export default authApi