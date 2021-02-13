<template>
  <div class="container">
    <h1>Add new Flat</h1>
    <form @submit.prevent="submitHandler">

      <div class="form-floating mb-3">
        <input type="text"
               class="form-control"
               required
               id="floatingInput"
               placeholder="Title"
               :value="title"
               @change="titleChangeHandler"
        >
        <label for="floatingInput">Title</label>
      </div>

      <div class="form-floating mb-3">
        <input
            type="number"
            class="form-control"
            required
            id="floatingPassword"
            placeholder="Phone"
            :value="phone"
            @change="phoneChangeHandler"
        >
        <label for="floatingPassword">Phone</label>
      </div>

      <div class="form-floating mb-3">
        <input
            type="number"
            class="form-control"
            required
            id="floatingPassword1"
            placeholder="Price"
            :value="price"
            @change="priceChangeHandler"
        >
        <label for="floatingPassword1">Price</label>
      </div>

      <div class="form-floating mb-3">
        <input
            type="number"
            class="form-control"
            required
            id="floatingPassword2"
            placeholder="Square"
            :value="square"
            @change="squareChangeHandler"
        >
        <label for="floatingPassword2">Square</label>
      </div>

      <div class="form-floating mb-3">
        <textarea
            class="form-control form-control__textarea"
            required
            id="floatingPassword3"
            placeholder="desc"
            :value="desc"
            @change="descChangeHandler"
        ></textarea>
        <label for="floatingPassword3">Description</label>
      </div>

      <button type="submit" class="btn btn-dark btn--full">Send</button>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      phone: '',
      price: '',
      square: '',
      desc: ''
    }
  },
  methods: {
    titleChangeHandler(e) {
      this.title = e.target.value
    },
    phoneChangeHandler(e) {
      this.phone = e.target.value
    },
    priceChangeHandler(e) {
      this.price = e.target.value
    },
    squareChangeHandler(e) {
      this.square = e.target.value
    },
    descChangeHandler(e) {
      this.desc = e.target.value
    },
    clearForm() {
      console.log('cl');
      this.title = '',
      this.phone = '',
      this.price = '',
      this.square = '',
      this.desc = ''
    },
    getFlatsLocalStore() {
      return JSON.parse(localStorage.getItem('flats'))
    },
    saveFlatInLocalStore() {
      const id = this.$store.state.flats.items.length + 1
      const flats = this.getFlatsLocalStore() || []
      flats.unshift({
        title: this.title,
        phone: this.phone,
        price: this.price,
        square: this.square,
        favorites: false,
        id: id,
        desc: this.desc
      })

      localStorage.setItem('flats', JSON.stringify(flats))
    },
    submitHandler() {
      this.saveFlatInLocalStore()
      this.clearForm()
    }
  }
}
</script>

<style scoped>
.form-control__textarea{
  height: 200px;
  display: block;
  resize: none;
}
.btn--full {
  width: 100%;
}
</style>