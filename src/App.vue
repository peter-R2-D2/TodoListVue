<template>
  <div class="h-screen bg-teal-300 dark:bg-indigo-900 px-3 pt-3">
    <router-view></router-view>
  </div>
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

    return {
      user: store.state.user
    }
  }
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
