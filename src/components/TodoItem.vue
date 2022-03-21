<template>
  <li class="flex justify-between items-center rounded-md dark:bg-indigo-600 py-3 px-2">
    <label class="task-list-item-label">
      <span
        class="dark:text-white"
        :class="{ 'task-list-item-done': todo.done }"
        @click="updateTodo(todo.id)"
      >
        {{ todo.text }}</span
      >
    </label>
    <div>
      <span class="cursor-pointer mr-2">
        <font-icon icon="pen-to-square" class="dark:text-white" />
      </span>
      <span @click="deleteTodo(todo.id)" class="cursor-pointer">
        <font-icon icon="trash-can" class="dark:text-red-600" />
      </span>
    </div>
  </li>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  setup () {
    const store = useStore()

    const todos = computed(() => store.state.todos)

    const updateTodo = (id) => {
      store.commit('updateTodo', id)
    }

    const deleteTodo = (id) => {
      store.commit('deleteTodo', id)
    }

    return { todos, updateTodo, deleteTodo }
  }
}
</script>

<style>
.task-list-item-done {
  color: #272727;
  text-decoration: line-through;
}
</style>
