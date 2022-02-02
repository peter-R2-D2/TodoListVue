<template>
  <ul class="task-list">
    <TodoItem v-for="todo of todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoApp",
  components: {
    TodoItem,
  },
  setup() {
    const store = useStore();

    const todos = computed(() => store.state.todos);

    return {
      todos,
    };
  },
};
</script>

<style>
.task-list {
  margin-top: 20px;
}
.task-list-item {
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 35px;
  margin-bottom: 12px;
}
.task-list-item input {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #272727;
  background-image: url("../assets/check.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  transition: 0.2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  appearance: none;
}
.task-list-item input:hover {
  border-color: var(--checkbox-color);
  box-shadow: 0 0 3px var(--checkbox-shadow);
}
.task-list-item input:checked {
  background-size: 10px;
  border: 1px solid var(--checkbox-color);
  background-color: var(--checkbox-color);
}
.task-list-item input:checked + span {
  color: #272727;
  text-decoration: line-through;
}
.task-list-item-label {
  display: flex;
  align-items: flex-start;
  color: #272727;
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}
.delete-btn {
  margin-left: auto;
  margin-right: 5px;
  display: block;
  width: 16px;
  height: 16px;
  background-image: url(../assets/remove.png);
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}
</style>
