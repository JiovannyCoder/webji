import axios from "./axios"

const API_URL = process.env.VUE_APP_API_URL

function getProjects() {
    const projects = axios.get(API_URL + 'projects')
                                    .then(response => response.data)
                                    .catch(e => console.log(e))
    return projects
}

export { getProjects }