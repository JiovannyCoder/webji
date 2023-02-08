<template>
    <section id="skills" class="bg-indigo-lighten-5 py-5">
        <v-container>
            <h4 class="text-h4 text-primary mb-4 text-center">Mes compétences</h4>
            <p class=" text-sm-center">Voici mes connaissances en programmation et développement web.</p>

            <v-row class="my-5">
                <v-col cols="12" sm="6">
                    <h5 class="text-h5">Languages de base</h5>
                    <div class="my-5" v-for="skill in skills.bases" :key="skill.name">
                        <p class="text-subtitle-1">{{ skill.name }}</p>
                        <v-progress-linear color="primary" v-model="skill.value" height="10"></v-progress-linear>
                    </div>
                </v-col>
                <v-col cols="12" sm="6">
                    <h5 class="text-h5">Frameworks maitrisés</h5>
                    <div class="my-5" v-for="skill in skills.framworks" :key="skill.name">
                        <p class="text-subtitle-1">{{ skill.name }}</p>
                        <v-progress-linear color="primary" v-model="skill.value" height="10"></v-progress-linear>
                    </div>
                </v-col>
            </v-row>

            <v-row class="my-5">
                <v-col cols="12">
                    <h5 class="text-h5 mb-5">Des connaissances en plus</h5>
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="item in items" :key="item.title">
                            <v-expansion-panel-title class="text-indigo">{{ item.title }}</v-expansion-panel-title>
                            <v-expansion-panel-text class="text-grey-darken-3 pt-4">
                                <p>{{ item.text }}</p>
                                <v-chip class="mx-1 mt-2" :color="item.color" v-for="tool in item.tools" :key="tool">{{ tool }}</v-chip>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: '_skills',
    data() {
        return {
            items: [
                { title: 'Qu\'est-ce que je connais sur Vue js ?', text: 'J\'apprécie particulièrement ce framwork javascript. En effet, je sais implémenter tous les outils autour de son ecosystème, notemment :', color: 'info', tools: [ 'Vue router', 'Vue x', 'Vuetify' ] },
                { title: 'Quels languages j\'utilise en back-end ?', text: 'Principalement, je suis un développeur PHP. Ainsi, j\'ai maîtrisé tous les essentiels autour de PHP, à savoir : ', color: 'warning', tools: [ 'PHP', 'Laravel', 'WordPress' ] },
                { title: 'Ai-je des connaissances en base de données ?', text: 'Oui je m\'y connais assez. Effectivement, j\'ai appris la conception des bases de données relationnelles. Je maîtrise :', color: 'indigo', tools: [ 'Mérise', 'SGBDR', 'SQL', 'MySQL' ] },
                
            ],
            skills: {
                bases: [
                    { name: 'HTML', value: 100 },
                    { name: 'CSS', value: 90 },
                    { name: 'Javascript', value: 80 },
                    { name: 'PHP', value: 80 }
                ],
                framworks: [
                    { name: 'Laravel', value: 85 },
                    { name: 'Vue js', value: 80 },
                    { name: 'Bootstrap', value: 80 },
                    { name: 'WordPress', value: 60 }
                ]
            }
        }
    }
}
</script>

<style>

</style>