import {createStore} from "vuex";

// Create a new store instance
const store = createStore({
  state: {
    count: 0,
    todos: [], // Array todos
  },
  mutations: {
    addTodo: function (state, todoText) {
      state.todos.push({
        id: Date.now(),
        text: todoText,
        done: false
      })
    },
    deleteTodo: function (state, id) {
      state.todos = state.todos.filter(item => item.id !== id)
    },
    updateTodo: function (state, id) {
      state.todos = state.todos.map(item => {
        if (item.id === id) {
          item.done = true
        }
        return item
      })
    }
  },
  actions: {

  },
  modules: {

  }
})

export default store
