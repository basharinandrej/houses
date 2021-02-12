<template>
    <div class="card">
        <img src="https://storage1.qayli.com/downloads/20200209-image-4ae3fbb1-9f22-4534-a556-a50500ea6de7.jpg" 
            class="card-img-top"
            alt="Изображение дома">
        <div class="card__wrapper">
            <div class="card-body card-body__column">
                <h5 class="card-title">{{ title }}, {{ square }} кв.м</h5>
                    <span class="badge bg-secondary">ул. Панкратова д. 30 кв. 75</span>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Цена: {{ price }}</li>
                <li class="list-group-item">Тел: {{ phone }}</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
                <a v-on:click="clickHandler"
                   class="btn btn-primary">
                    Подробнее
                </a>

                <label class="card-body__label">
                    <input type="checkbox" v-model="checked" v-on:change="$emit('favoriteHandler', id)">
                    В избранное
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['title', 'square', 'price', 'desc', 'phone', 'id', 'favorites'],
  data() {
    return {
      checked: this.favorites
    }
  },
  methods: {
    clickHandler() {
      const id = this.id
      this.$router.push({ name: 'flat', params: { 'id': id }})
    }
  }
}
</script>


<style>
.card{
    flex-direction: row;
    margin-bottom: 24px;
}
.card-title{
    text-align: start;
}
.card-text {
    text-align: start;
}
.card-body {
    display: flex;
    align-items: center;
}
.card-body__label {
    margin-left: 24px;
    cursor: pointer;
}
.card-img-top {
    max-width: 360px;
}
.card__wrapper {
    width: 100%;
}
.card-body__column {
    flex-direction: column;
    align-items: start;
}
</style>