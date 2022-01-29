<template>
  <h1 class="app-header">Vue Todo List</h1>

  <main class="add-task">
    <input
      type="text"
      placeholder="Add New Task"
      class="task-input"
      v-model="newTodoInput"
      v-on:keydown.enter="addTodo(newTodoInput)"
    />
    <button class="submit-task" @click="addTodo(newTodoInput)">+</button>
  </main>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      newTodoInput: "",
    };
  },
  methods: {
    addTodo(newTodo) {
      this.$store.commit("addTodo", newTodo);
      this.newTodoInput = "";
    },
  },
};
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
