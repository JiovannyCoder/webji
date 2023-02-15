import axios from "axios"
const token = process.env.API_KEY
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default axios