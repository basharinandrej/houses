<template>
    <div class="leading-heading">
        <Header/>
        <main class="main">
            <div class="container">
                <Card 
                    v-for="(flat, idx) of flats"
                    :key="idx"
                    v-bind:title="flat.title"
                    v-bind:square="flat.square"
                    v-bind:price="flat.price"
                    v-bind:desc="flat.desc"
                    v-bind:phone="flat.phone"
                />
            </div>
        </main>

        <Footer/>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import Card from './Card.vue'
import Header from './Header.vue'

export default {
    name: 'Home',
    data() {
        return {
            flats: []
        }
    },
    components: {
        Footer, Card, Header
    },
    mounted() {
        return this.flats = this.$store.getters.getFlats
    }
}
</script>

<style scoped>
.main {
    padding-top: 32px;
}
.leading-heading {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>