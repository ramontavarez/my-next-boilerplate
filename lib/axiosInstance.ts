import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
    baseURL: process.env.PUBLIC_API_URL
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = cookies().get('token')
        // console.log(token);
        if (token) {
            if (config.headers) {
                config.headers["Authorization"] = `Bearer ${token.value}`
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance;