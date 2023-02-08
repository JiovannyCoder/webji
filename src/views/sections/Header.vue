<template>
        <header id="header" class="h-screen bg-primary">
            <v-container class="d-flex align-center h-100 justify-center text-md-start text-center">
                <v-row align="center">
                    <v-col cols="12" md="6" sm="12">
                        <h1 class="text-h4 text-sm-h3 text-lg-h2 my-4">
                            Developpeur Web <br>
                            Laravel & Vue Js
                        </h1>
                        <p class="mb-5">Vous cherchez un développueur spécialisé en Laravel et Vue Js ?
                           <b> Haritina Jiovanny</b> est là pour vous.</p>
                        <div style="column-gap: 1rem">
                            <v-btn target="blank" href="https://www.linkedin.com/in/haritina-jiovanny-razafy" icon flat color="primary"><v-icon size="large"  icon="mdi-linkedin" /></v-btn>
                            <v-btn target="blank" href="https://github.com/JiovannyCoder" icon flat color="primary"><v-icon size="large"  icon="mdi-github" /></v-btn>
                            <v-btn target="blank" href="https://www.facebook.com/profile.php?id=100007408365811" icon flat color="primary"><v-icon size="large"  icon="mdi-facebook" /></v-btn>
                            <v-btn icon flat color="primary"><v-icon size="large"  icon="mdi-skype" /></v-btn>
                        </div>
                        <div class="mt-4 d-flex justify-center justify-md-start flex-wrap" style="gap: 1rem">
                            <v-btn  size="large" color="warning" v-scroll-to="`#projects`" prepend-icon="mdi-cube-outline">Voir mes projets</v-btn>
                            <v-btn  size="large" variant="outlined" color="white" v-scroll-to="`#about`" prepend-icon="mdi-account">Qui suis-je ?</v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6"  align-self="center" class="d-flex justify-center justify-md-end">
                        <v-img max-width="600px" src="images/pc.png"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </header>
</template>

<script>
export default( {
    name: '_Header'
})

</script>
