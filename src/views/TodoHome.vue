<template>
  <div class="container-bg">
    <TodoNavbar />
    <TodoForm />
    <TodoApp />
    </div>
</template>

<script>
import TodoNavbar from '../components/navbar/TodoNavbar.vue'
import TodoApp from '../components/TodoApp.vue'
import TodoForm from '../components/TodoForm.vue'

export default {
  name: 'TodoHome',
  components: { TodoApp, TodoForm, TodoNavbar }
}
</script>

<style>
.container-bg{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
