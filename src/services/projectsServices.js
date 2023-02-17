import axiosClient from './axios'

function getProjects() {
    const projects = axiosClient.get('/api/projects')
                                    .then(response => response.data)
                                    .catch(e => console.log(e))
    return projects
}

export { getProjects }