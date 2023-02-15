import axios from "axios"
// const token = process.env.VUE_APP_API_KEY
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

const API_URL = process.env.VUE_APP_API_URL

function getProjects() {
    const projects = axios.get(API_URL + 'projects')
                                    .then(response => response.data)
                                    .catch(e => console.log(e))
    return projects
}

export { getProjects }