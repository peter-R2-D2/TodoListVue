<template>
  <div class="app-container">
    <BarTodo />
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";
import BarTodo from "./components/BarTodo.vue";

export default {
  name: "App",
  components: { TodoApp, BarTodo },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");

* {
  box-sizing: border-box;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
}
</style>
