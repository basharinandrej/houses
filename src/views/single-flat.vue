<template>
  <div class="leading-heading">
    <Header/>
      <h1>
        {{ dataFlat.title }}
      </h1>
      <p>Площадь: {{ dataFlat.square }}</p>
      <strong>Цена: {{ dataFlat.price }}</strong>
      <p>Тел: {{ dataFlat.phone }}</p>
      <p>{{dataFlat.desc}}</p>
      <label class="card-body__label">
        <input type="checkbox" v-model="dataFlat.favorites">
        В избранное
      </label>
  </div>
</template>

<script>
import Header from '../components/Header.vue'


export default {
  data() {
    return {
      dataFlat: {}
    }
  },
  components: {
    Header
  },
  mounted() {
    return this.dataFlat = this.$store.state.Flats.currentFlat[0]
  }
}
</script>