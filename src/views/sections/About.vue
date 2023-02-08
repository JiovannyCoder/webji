<template>
    <section id="about" >
        <v-container class="my-5">
            <h4 class="text-h4 text-primary mb-4 text-center">A propos de moi</h4>
            <p class=" text-sm-center">Laissez moi l'honneur de me présenter. 
                Je me nomme Haritina Jiovanny et je suis particulièrement passionné du web.
            </p>
            <v-row class="my-5" align="center">
                <v-col cols="12"  lg="3" class="d-flex justify-center">
                    <v-avatar size="250" class="bg-grey-lighten-3">
                        <v-img  src="images/avatar.png" cover ></v-img>
                    </v-avatar>
                </v-col>
                <v-col cols="12"  lg="9">
                    <v-row>
                        <v-col cols="12">
                            <h5 class="text-h5 my-4 text-sm-center text-lg-start">Developpeur Web Laravel & Vue js</h5>
                            <p class=" text-sm-center text-lg-start">Je suis un codeur habitué dans le language front-end avec Vue js mais aussi très à l'aise en developpement back-end avec Laravel PHP.</p>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-list>
                                <v-list-item v-for="about in abouts.first" :key="about.name">
                                    <v-list-item-title>
                                        <v-icon color="primary"  icon="mdi-chevron-right" />
                                        <b>{{ about.name }} :  </b>{{ about.value }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-list>
                                <v-list-item v-for="about in abouts.second" :key="about.name">
                                    <v-list-item-title>
                                        <v-icon color="primary"  icon="mdi-chevron-right" />
                                        <b>{{ about.name }} :  </b>{{ about.value }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
    
</template>

<script>
export default {
    name: '_about',
    data() {
        return {
            abouts: {
                first: [
                    { name: 'Nom', value: 'Haritina Jiovanny' },
                    { name: 'Site web', value: 'Webji.com' },
                    { name: 'Téléphone', value: '+261 34 73 862 80' },
                    { name: 'Ville', value: 'Antananarivo, Madagascar' },    
                ],
                second: [
                    { name: 'Github', value: 'JiovannyCoder' },    
                    { name: 'Skype', value: 'Haritina Jiovanny' },    
                    { name: 'Email', value: 'Haritinamg@gmail.com' },    
                    { name: 'Freelance', value: 'Possible' }
                ]
            }
        }
    }
}
</script>

<style>

</style>