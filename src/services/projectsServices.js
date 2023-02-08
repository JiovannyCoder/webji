import axios from "axios";

const API_URL = "https://webji-api.000webhostapp.com/api/"

function getProjects() {
    const projects = axios.get(API_URL + 'projects')
                                    .then(response => response.data)
                                    .catch(e => console.log(e))
    return projects
}

export { getProjects }