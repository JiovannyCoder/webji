import axiosClient from './axios'

function  getCategories() {
    const categories = axiosClient.get('/api/categories')
                                    .then(response => response.data)
                                    .catch(e => console.log(e))
    return categories
}

export { getCategories }