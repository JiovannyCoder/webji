<template>
        <v-app-bar :flat="false" app color="primary" class="justify-end">
                <v-container class="d-flex align-center" >
                <v-toolbar-title class="text-uppercase">
                    <span class="font-weight-bold">Web</span>
                    <span>Ji</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <div class="d-md-flex d-none">
                    <v-btn class="text-capitalize font-weight-light" :prepend-icon="link.icon" v-for="link in links" :key="link.link" v-scroll-to="link.route">{{ link.name }}</v-btn>
                    <!-- <v-btn class="bg-warning">Télécharger CV</v-btn> -->
                </div>
                <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
                </v-container>
        </v-app-bar>
        <v-navigation-drawer disable-resize-watcher v-model="drawer" color="primary" class="d-md-none">
            <v-row>
                <v-col cols="12" align="center">
                    <div class="mt-5">
                        <v-avatar size="140">
                            <v-img cover src="images/avatar-class.jpg"></v-img>
                        </v-avatar>
                        <p class="mt-4 text-subtitle-1">Haritina Jiovanny</p>
                        <p class="text-warning text-post">Développeur Web</p>
                    </div>
                </v-col>
                <v-col cols="12">
                    <v-list>  
                        <v-list-item v-for="link in links" :key="link.name" v-scroll-to="link.route">
                            <template v-slot:prepend>
                                <v-icon color="white" :icon="link.icon"></v-icon>
                            </template>
                            <v-list-item-title>{{ link.name }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12">
                    <div style="column-gap: 1rem" class="text-center">
                            <v-btn target="blank" href="https://www.linkedin.com/in/haritina-jiovanny-razafy" icon flat color="primary"><v-icon size="large"  icon="mdi-linkedin" /></v-btn>
                            <v-btn target="blank" href="https://github.com/JiovannyCoder" icon flat color="primary"><v-icon size="large"  icon="mdi-github" /></v-btn>
                            <v-btn target="blank" href="https://www.facebook.com/profile.php?id=100007408365811" icon flat color="primary"><v-icon size="large"  icon="mdi-facebook" /></v-btn>
                            <v-btn icon flat color="primary"><v-icon size="large"  icon="mdi-skype" /></v-btn>
                        </div>
                </v-col>
            </v-row>
        </v-navigation-drawer>
</template>

<script>
export default {
    name: '_navbar',
    data() {
        return  {
            drawer: false,
            links: [
                { name: 'Acceuil', icon: 'mdi-home', route: '#header', },
                { name: 'A propos', icon: 'mdi-account', route: '#about', },
                { name: 'Services', icon: 'mdi-wallet', route: '#services', },
                { name: 'Projects', icon: 'mdi-cube-outline', route: '#projects', },
                { name: 'Contact', icon: 'mdi-phone', route: '#contact' }
            ]
        }
    }
}
</script>

<style scoped>
.text-post {
    letter-spacing: 2px;
    font-size: 1.05rem;
}
.v-list-item {
    cursor: pointer;
}
.v-list-item:hover {
    background-color: rgba(255, 255, 255, .2);
}
</style>