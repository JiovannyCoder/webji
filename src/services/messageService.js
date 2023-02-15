import axios from "axios"
// const token = process.env.VUE_APP_API_KEY
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

const API_URL = process.env.VUE_APP_API_URL

function sendMessage( message ) {
    const data = axios.post(API_URL + 'message', message)
                                .then(response => response.data)
                                .catch(e => console.log(e))

    return data
}

export { sendMessage }