<template>
  <li class="task-list-item">
    <label class="task-list-item-label">
      <span
        :class="{ 'task-list-item-done': todo.done }"
        @click="updateTodo(todo.id)"
      >
        {{ todo.text }}</span
      >
    </label>
    <span class="delete-btn" @click="deleteTodo(todo.id)"></span>
  </li>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    const todos = computed(() => store.state.todos);

    const updateTodo = (id) => {
      store.commit("updateTodo", id);
    };

    const deleteTodo = (id) => {
      store.commit("deleteTodo", id);
    };

    return { todos, updateTodo, deleteTodo };
  },
};
</script>

<style>
.task-list-item-done {
  color: #272727;
  text-decoration: line-through;
}
</style>
