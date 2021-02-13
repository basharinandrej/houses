<template>
  <div class="card" style="width:560px" >
    <div class="card__wrapper">
      <div class="card-header">
        Список дел
      </div>
      <ul class="list-group list-group-flush"
          v-show="todos.length">
        <TodoItem
            v-for="item in todos"
            :key="item.id"
            v-bind:title="item.title"
            v-bind:completed="item.completed"
            v-bind:id="item.id"
            v-on:changeCheckHandler="changeCheckHandler"
        />
      </ul>
      <p
        v-show="!todos.length"
      >
        Добавьте задачу
      </p>
    </div>

    <div class="card__wrapper card__wrapper--gap">
      <ToDoForm/>
    </div>
  </div>
</template>

<script>
import ToDoForm from '@/components/Todo/ToDoForm'
import TodoItem from '@/components/Todo/TodoItem'

export default {
  data() {
    return {
      todos: []
    }
  },
  components: {
    ToDoForm, TodoItem
  },
  methods: {
    changeCheckHandler(id) {
      this.$store.commit('checkedTodo', id)
      this.todos = this.$store.state.todo.todos
      this.updateLocalStore(id)
    },
    updateLocalStore(id) {
      const todos = JSON.parse(localStorage.getItem('Todos'))
      todos.map(t => {
        t.id === id
          ? t.completed = !t.completed
          : null
      })
      localStorage.setItem('Todos', JSON.stringify(todos))
    }
  },
  mounted() {
    this.todos = this.$store.state.todo.todos
  }
}
</script>








<style scoped>
.card {
  padding: 0 !important;
}
.list-group {
  overflow-y: scroll;
  max-height: 200px;
}
.list-group li:last-child {
  border-bottom-width: 1px;
}
.card__wrapper--gap {
  padding: 12px ;
}
</style>