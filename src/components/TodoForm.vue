<template>
<div>
  <h1 class="app-header">Todo List</h1>

  <main class="add-task">
    <input
      type="text"
      placeholder="Add New Task"
      v-model="todoText"
      class="task-input"
      v-on:keypress.enter="addTodo"
    />
    <button v-if="todoText !== ''" class="submit-task" @click="addTodo">
      <font-icon icon='plus' />
    </button>
    <button v-else class="submit-task">
      <font-icon icon="plus" />
    </button>
  </main>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  name: 'TodoForm',
  setup () {
    const store = useStore()
    const todoText = ref('') // almacena lo del input

    function addTodo (e) {
      store.commit('addTodo', this.todoText)
      this.todoText = ''
    }

    return {
      todoText,
      addTodo
    }
  }
}
</script>

<style>
.app-header {
  font-size: 20px;
  line-height: 32px;
  margin: 0 0 12px 0;
  color: #272727;
}
.submit-task {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: none;
  background: var(--add-button);
  color: #272727;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: var(--add-button-shadow);
}
.add-task {
  height: 40px;
  font-size: 14px;
  display: flex;
}
.task-input {
  width: 100%;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #272727;
  background-color: transparent;
  margin-right: 15px;
  color: #272727;
  box-shadow: none;
  border-radius: 0;
}
.task-input::placeholder {
  color: #272727;
}
</style>
