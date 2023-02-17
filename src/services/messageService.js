import axiosClient from './axios'

function sendMessage( message ) {
    
    const data = axiosClient.post('/api/message', message)
                                .then(response => response.data)
                                .catch(e => console.log(e))

    return data
}

export { sendMessage }