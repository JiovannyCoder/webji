import axios from "axios";

// const token = process.env.VUE_APP_API_KEY

const axiosClient = axios.create({
    baseURL:  process.env.VUE_APP_API_URL,
    // withCredentials: true,
    // headers : {
    //     'Authorization' : `Bearer ${token}`
    // }
})

export default axiosClient