<template>
  <form @submit.prevent="submitHandler">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Новая задача</label>
      <input type="text"
             class="form-control"
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
             placeholder="Добавить квартиру"
             :value="todo"
             @input="inputHandler"
      >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      todo: ''
    }
  },
  mounted() {
    this.$store.commit('loadTodos', JSON.parse(localStorage.getItem('Todos')) || [])
  },
  methods: {
    inputHandler(e) {
      this.todo = e.target.value
    },
    submitHandler() {
      this.$store.commit('addTodo', this.todo)
      this.todo = ''
      this.saveTodoInLocalStorage()
    },
    saveTodoInLocalStorage() {
      localStorage.setItem('Todos', JSON.stringify(this.$store.state.todo.todos))
    }
  }
}
</script>



<style scoped>
.form-label {
  text-align: left;
  display: block;
}
.btn {
  width: 100%;
}
</style>