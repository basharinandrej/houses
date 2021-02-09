<template>
  <div class="leading-heading">
    <Header/>
    <main class="main">
      <div class="container">
          <Card
              v-show="addFavoritesFlat.length"
              v-for="(flat, idx) of addFavoritesFlat"
              :key="idx"
              v-bind:title="flat.title"
              v-bind:square="flat.square"
              v-bind:id="flat.id"
              v-bind:price="flat.price"
              v-bind:desc="flat.desc"
              v-bind:phone="flat.phone"
              v-bind:favorites="flat.favorites"
              v-on:favoriteHandler="favoritesHandler"
          />
        <p
            v-show="!addFavoritesFlat.length"
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
  computed: {
    addFavoritesFlat() {
      return this.$store.getters.getFavorites
    }
  },
  methods: {
    favoritesHandler(id) {
      this.$store.dispatch('addFavoritesAction', id)
    }
  }
}
</script>


