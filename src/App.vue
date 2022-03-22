<template>
  <div class="h-screen bg-teal-300 dark:bg-indigo-900 px-3 pt-3">
    <TodoNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import TodoNavbar from './components/navbar/TodoNavbar.vue'

export default {
  name: 'App',
  components: { TodoNavbar }
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
</style>
