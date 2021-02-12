<template>
  <div class="leading-heading">
    <Header/>
      <h1>
        {{ currentFlat.title }}
      </h1>
      <p>Площадь: {{ currentFlat.square }}</p>
      <strong>Цена: {{ currentFlat.price }}</strong>
      <p>Тел: {{ currentFlat.phone }}</p>
      <p>{{currentFlat.desc}}</p>
      <label class="card-body__label">
        <input type="checkbox" v-model="currentFlat.favorites">
        В избранное
      </label>
  </div>
</template>

<script>
import Header from '../components/Header.vue'


export default {
  data() {
    return {
      id: this.$route.params.id,
      currentFlat: {}
    }
  },
  components: {
    Header
  },
  mounted() {
    this.$store.commit('currentFlat', this.id)
    this.getCurrentFlat()
  },
  methods: {
    getCurrentFlat() {
      this.currentFlat = this.$store.state.flats.currentFlat
    }
  }
}


</script>