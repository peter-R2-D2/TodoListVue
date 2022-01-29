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
        text: todoText,
        done: false
      })
    }
  },
  actions: {

  },
  modules: {

  }
})

export default store
