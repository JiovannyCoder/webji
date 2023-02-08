<template>
    <section id="services" class="py-5 bg-primary">
        <v-container>
            <h4 class="text-h4  mb-4 text-center">Mes services</h4>
            <p class=" text-sm-center">Voici donc tous les services que je peux rendre en ma qualité de développeur.</p>

            <v-row class="my-5">
                <v-col v-for="service in services" :key="service.title" cols="12" md="4">
                    <v-card variant="outlined" max-width="375" class="mx-auto">
                        <div class="text-center">
                            <v-icon  size="240" :color="service.color" :icon="service.icon"></v-icon>
                        </div>
                        <v-card-title :class="`text-${ service.color }`">{{ service.title }}</v-card-title>
                        <v-card-text>{{ service.text }}</v-card-text>
                        <v-card-actions>
                            <v-btn :color="service.color" variant="text" @click="service.expand = !service.expand">Outils utilisés</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn :icon="service.expand ? 'mdi-chevron-down' : 'mdi-chevron-up' " @click="service.expand = !service.expand"></v-btn>
                        </v-card-actions>
                        <v-slide-y-transition hide-on-leave>
                            <v-card-text v-if="service.expand">
                                <v-chip v-for="tool in service.tools" :key="tool" :color="service.color" class="ma-1">{{ tool }}</v-chip>
                            </v-card-text>
                        </v-slide-y-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: '_service',
    data() {
        return {
            services: [
                {  title: 'Intégration web', icon: 'mdi-monitor-screenshot', color: 'amber', text: 'Création de site web : d\'une maquette jusqu\'au navigateur', tools: [ 'HTML', 'CSS / SASS', 'Bootstrap 5 / Tailwind'], expand: false },
                {  title: 'Développement front-end', icon: 'mdi-vuejs', color: 'secondary', text: 'Implémentation de Vue Js pour optimiser la réactivité du site', tools:  [ 'Vue 2.x / 3.x', 'Vue-router & Vue x', 'Vuetify' ], expand: false},
                {  title: 'Développement back-end', icon: 'mdi-laravel', color: 'red-lighten-1', text: 'Utilisation du framework PHP Laravel pour la gestion des données', tools: [ 'PHP 5.x / 7.x / 8.x', 'MySQL / MariaDB', 'Laravel 8.x / 9.x'], expand: false }
            ]
        }
    }
}
</script>

<style>

</style>