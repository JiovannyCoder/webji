import axios from "./axios"

const API_URL = process.env.API_URL

function getCategories() {
    const categories = axios.get(API_URL + 'categories')
                                    .then(response => response.data)
                                    .catch(e => console.log(e))
    return categories
}

export { getCategories }