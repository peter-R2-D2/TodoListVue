<template>
  <div class="flex justify-between p-3 dark:bg-indigo-600 rounded-md mb-3 w-full md:w-2/3">
    <div>
      <h1 class="dark:text-white text-2xl font-bold">Todo <span class="text-amber-400">App</span></h1>
    </div>
    <nav>
      <font-icon icon="bars" class="dark:text-white text-2xl" />
      <button @click="logout" class="ml-3">
        <font-icon icon="right-to-bracket" class="dark:text-white text-2xl" />
      </button>
    </nav>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const logout = () => {
      store.dispatch('logout')
    }

    return { logout }
  }

}
</script>

<style>

</style>
