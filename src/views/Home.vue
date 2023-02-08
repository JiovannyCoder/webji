<template>
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
</template>

<script>
import Header from './sections/Header.vue'
import About from './sections/About.vue'
import Skills from './sections/Skills.vue'
import Services from './sections/Services.vue'
import Projects from './sections/Projects.vue'
import Contact from './sections/Contact.vue'
import Footer from './sections/Footer.vue'

export default {
    name: '_home',
    components: {
        Header,
        About,
        Skills,
        Services,
        Projects,
        Contact,
        Footer
    }
}
</script>