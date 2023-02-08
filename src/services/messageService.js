import axios, { toFormData } from "axios"

const API_URL = "https://webji-api.000webhostapp.com/api/"

function sendMessage( message ) {
    const data = axios.post(API_URL + 'message', toFormData(message))
                                .then(response => response.data)
                                .catch(e => console.log(e))

    return data
}

export { sendMessage }