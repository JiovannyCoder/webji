import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SingleProject from '../views/SingleProject.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path:  '/',
        name: 'Home',
        component: Home
    } ,
    {
        path: '/project/:id',
        name: 'SingleProject',
        component:  SingleProject,
        props: true,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router