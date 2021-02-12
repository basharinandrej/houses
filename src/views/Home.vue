<template>
    <div class="leading-heading">
        <Header/>
        <main class="main">
            <div class="container">
                <Card
                    v-for="(flat, idx) of getFlats"
                    :key="idx"
                    v-bind:title="flat.title"
                    v-bind:id="flat.id"
                    v-bind:square="flat.square"
                    v-bind:price="flat.price"
                    v-bind:desc="flat.desc"
                    v-bind:phone="flat.phone"
                    v-bind:favorites="flat.favorites"
                    v-on:favoriteHandler="favoriteHandler"
                />
            </div>
        </main>

        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'
import Header from '../components/Header.vue'

export default {
    name: 'Home',
    components: {
        Footer, Card, Header
    },
    mounted() {
      this.$store.dispatch('getInfoUserStart')
      this.$store.dispatch('getFlatsAction')
      this.$store.dispatch('getInfoUser')
    },
    computed: {
        getFlats() {
            return this.$store.state.flats.items
        }
    },
    methods: {
        favoriteHandler(id) {
            this.$store.commit('addFavorites', id)
        }
    }
}
</script>

<style >
.main {
    padding-top: 32px;
}
.leading-heading {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>