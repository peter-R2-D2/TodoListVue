<template>
  <li class="flex justify-between items-center rounded-md bg-teal-500 dark:bg-indigo-600 py-3 px-2 mb-3">
    <label class="task-list-item-label">
      <span
        class="dark:text-white text-white"
        :class="{ 'task-list-item-done': todo.done }"
        @click="updateTodo(todo.id)"
      >
        {{ todo.text }}</span
      >
    </label>
    <div>
      <span class="cursor-pointer mr-2">
        <font-icon icon="pen-to-square" class="dark:text-white text-white" />
      </span>
      <span @click="deleteTodo(todo.id)" class="cursor-pointer">
        <font-icon icon="trash-can" class="dark:text-red-600 text-red-600" />
      </span>
    </div>

  <ModalDelete />
  </li>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ModalDelete from '../components/modal/ModalDelete.vue'
export default {
  name: 'TodoItem',
  components: { ModalDelete },
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
      // store.commit('deleteTodo', id)
      store.commit('setStoreKey', {
        key: 'showModalDelete',
        value: true
      })
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
