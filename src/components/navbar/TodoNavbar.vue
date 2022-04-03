<template>
  <nav class="relative flex justify-between p-3 dark:bg-indigo-600 rounded-md mb-3 w-full md:w-2/3">
    <div>
      <h1 class="dark:text-white text-2xl font-bold">Todo <span class="text-amber-400">App</span></h1>
    </div>
    <div @click="toggleNavbar" class="cursor-pointer">
      <font-icon icon="bars" class="dark:text-white text-2xl" />
    </div>
    <div class="absolute top-16 left-0 bg-indigo-600 w-full rounded-md" :class="showMenu ? 'flex' : 'hidden'">
      <ul class="flex flex-col text-gray-100 p-3">
        <li class="m-3">
          <font-icon icon="house-chimney" />
          Inicio
        </li>
        <li class="m-3">
          <font-icon icon="check-double" />
          Ver tareas
        </li>
        <li class="m-3">
          <button @click="logout" class="p-2 bg-indigo-900 rounded-md">
            <font-icon icon="right-to-bracket" />
            Cerrar sesion
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const showMenu = ref(false)

    const toggleNavbar = () => {
      showMenu.value = !showMenu.value
    }

    const store = useStore()
    const logout = () => {
      store.dispatch('logout')
    }

    return { logout, toggleNavbar, showMenu }
  }

}
</script>

<style>

</style>
