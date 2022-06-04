import axios from "axios";
import restfulApi from "src/constants/restfulAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosClient = axios.create({
    baseURL: restfulApi.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Add a request interceptor
axiosClient.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const jsonValue = await AsyncStorage.getItem("accessToken");

      if (jsonValue !== null) {
        const token =  JSON.parse(jsonValue)
        config.headers["authorization"] = "Bearer " + token;
        return config
      } 

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient