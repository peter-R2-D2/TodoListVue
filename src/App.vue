<template>
  <div class="container-bg bg-teal-300 dark:bg-indigo-900 px-3 pt-3">
    <TodoForm />
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'
import TodoForm from './components/TodoForm.vue'

export default {
  name: 'App',
  components: { TodoApp, TodoForm }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-bg{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
