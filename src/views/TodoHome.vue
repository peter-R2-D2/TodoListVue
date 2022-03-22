<template>
    <div class="container-bg">
      <TodoForm />
      <TodoApp />
    </div>
</template>

<script>
import TodoApp from '../components/TodoApp.vue'
import TodoForm from '../components/TodoForm.vue'

export default {
  name: 'TodoHome',
  components: { TodoApp, TodoForm }
}
</script>

<style>
.container-bg{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
