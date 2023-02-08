import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import VueScrollTo from 'vue-scrollto'

loadFonts()

createApp(App)
  .use(router)
  .use(VueScrollTo)
  .use(vuetify)
  .mount('#app')
