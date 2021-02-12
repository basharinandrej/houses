<template>
  <div class="leading-heading">
    <Header/>
    <main class="main">
      <div class="container">
          <Card
              v-show="flatFavorites.length"
              v-for="(flat, idx) of flatFavorites"
              :key="idx"
              v-bind:title="flat.title"
              v-bind:square="flat.square"
              v-bind:id="flat.id"
              v-bind:price="flat.price"
              v-bind:desc="flat.desc"
              v-bind:phone="flat.phone"
              v-bind:favorites="flat.favorites"
              v-on:favoriteHandler="favoriteHandler"
          />
        <p
          v-show="!flatFavorites.length"
        > Нет выбранных квартир</p>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'Favorites',
  components: {
    Card, Header, Footer
  },
  data() {
    return {
      flatFavorites: []
    }
  },
  mounted() {
    this.flatFavorites = this.$store.getters.getFavorites
  },
  methods: {
    favoriteHandler(id) {
      this.$store.commit('addFavorites', id)
    }
  }
}
</script>


