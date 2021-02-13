const state = {
    todos: []
}

const mutations = {
    loadTodos(state, payload) {
        state.todos = payload
    },
    addTodo(state, payload) {
        const id = state.todos && state.todos.length + 1 || 0
        const newTodo = {
            id,
            title: payload,
            completed: false
        }
        console.log(state);
        state.todos.unshift(newTodo)
    },
    checkedTodo(state, payload) {
        state.todos.map(todo => {
            todo.id === payload
            ? todo.completed = !todo.completed
            : null
        })
    }
}

export default {
    state,
    mutations
}