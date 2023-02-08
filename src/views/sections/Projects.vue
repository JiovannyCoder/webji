<template>
        <section id="projects" class="py-5">
            <v-container>
                <h4 class="text-h4 text-primary mb-4 text-center">Mes projets</h4>
                <p class=" text-sm-center">Voici donc tous les projets qui m'ont permis de grandir dans le domaine du developpement.</p>
                
                <!-- Verifications des erreurs  -->
                <div class="my-5 text-center" v-if="error_categories">
                    <p class="text-subtitle-1 text-error">{{  error_categories }}</p>
                </div>
                <div v-else>
                    <div class="my-5 text-center" v-if="!categories.length">
                        <p class="text-subtitle-1">Catégories en chargement...</p>
                        <v-btn icon :loading="categories_are_loading" color="primary"></v-btn>
                    </div>
                    <v-row class="my-5" v-else>
                        <v-col cols="12" class="text-center">
                            <v-chip color="indigo" variant="outlined" @click="filterProject('*')">All</v-chip>
                            <v-chip @click="filterProject(categorie.id)" v-for="categorie in categories" :key="categorie.id" class="ma-1" variant="outlined" color="indigo">{{ categorie.name }}</v-chip>
                        </v-col>
                    </v-row>
                </div>

                <!-- Verifications des erreurs  -->
                <div class="my-5 text-center" v-if="error_projects">
                    <p class="text-subtitle-1 text-error">{{  error_projects }}</p>
                </div>
                <div v-else>
                    <!-- Chargement des projets  -->
                    <div class="my-5 text-center" v-if="!projects.length">
                        <p class="text-subtitle-1">Chargement de mes projets</p>
                        <v-btn icon :loading="projects_are_loading" color="primary"></v-btn>
                    </div>
                    <v-row class="my-5" v-else>
                        <v-scale-transition group hide-on-leave leave-absolute origin="center center">
                            <v-col v-for="project in paginateProjects" :key="project.id" cols="12" sm="6" md="6" lg="4">
                                <v-card max-width="375" height="100%" class="mx-auto" transition="scale-transition" >
                                    <v-img cover  height="240" :src="renderImage(project.image)" :alt="project.name"></v-img>
                                    <v-card-title class="text-primary">{{ project.name }}</v-card-title>
                                    <v-card-text>{{ project.description }}</v-card-text>
                                    <v-card-actions>
                                        <v-btn color="warning">Voir les détails</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn prepend-icon="mdi-github">
                                            github
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-scale-transition>

                        <!-- error message for no project filtered -->
                        <v-slide-x-transition>
                            <v-col cols="12" v-if="!filteredProjects.length">
                                    <v-card color="warning" variant="outlined">
                                        <v-card-text transition="slide-x-transition">
                                            Pas encore de projet pour le moment.
                                        </v-card-text>
                                    </v-card>
                            </v-col>
                        </v-slide-x-transition>
                        <v-col cols="12" v-if="filteredProjects.length >= pagination.perPage">
                            <v-pagination color="primary" :length="Math.ceil(filteredProjects.length / pagination.perPage)" :total-visible="pagination.visible" v-model="pagination.page" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>
</template>

<script>
import { getProjects } from '../../services/projectsServices'
import { getCategories } from '../../services/categoriesServices'

export default {
    name: '_projects',
    data() {
        return {
            projects: [],
            categories: [],
            pagination: {
                page: 1,
                perPage: 3,
                visible: 3
            },
            filter: '*',
            projects_are_loading: false,
            categories_are_loading: false,
            error_projects: '',
            error_categories: '',
            API_URL: 'https://webji-api.000webhostapp.com/'
        }
    },
    computed: {
        paginateProjects() {
            return this.filteredProjects.slice((this.pagination.page - 1)* this.pagination.perPage, this.pagination.page * this.pagination.perPage)
        },
        filteredProjects() {
            if(this.filter != '*') {
                return this.projects.filter(project => {
                    const categorie_id = project.categories.map(data => data.id) 
                    return categorie_id.includes(this.filter)
                })
            }
            return this.projects
        }
    },
    methods: {
        filterProject(params) {
            this.filter = params
        },
        renderImage(image_path) {
            return this.API_URL + '/storage/' + image_path
        }
    },
    created() {
            this.projects_are_loading =true
            this.categories_are_loading = true

            getCategories().then(data => {
                this.categories = data.data
                this.categories_are_loading = false
            }).catch(e => {
                console.log('Error occured during categories loading : ', e)
                this.error_categories = 'Echec du chargement des categories'
            })
            getProjects().then(data => {
                this.projects = data.data
                this.projects_are_loading =false
            }).catch(e =>{
                console.log('Error occured during projects loading : ', e)
                this.error_projects = 'Echec du chargement des projects'
            })
    }
}
</script>

<style>

</style>