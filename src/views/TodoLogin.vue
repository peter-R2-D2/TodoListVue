<template>
  <div class="flex flex-col justify-center shadow-xl p-3">
    <h1 class="text-center dark:text-white text-3xl my-8">Bienvenido de nuevo</h1>
    <form @submit.prevent="login" class="w-full">
      <div class="flex flex-col mt-3">
        <label class="text-lg dark:text-white">Correo</label>
        <input type="email" placeholder="Ingrese su correo" class="p-2 rounded-md" v-model="loginForm.email">
      </div>
      <div class="flex flex-col mt-3">
        <label class="text-lg dark:text-white">Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" class="p-2 rounded-md" v-model="loginForm.password">
      </div>
      <div class="flex flex-col mt-3">
        <button type="submit" class="dark:text-white dark:bg-indigo-600 rounded-md p-2">Iniciar sesion</button>
        <router-link class="dark:text-white mt-3" :to="{name: 'TodoSignUp'}">¿Deseas crear una cuenta?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  name: 'TodoLogin',
  setup () {
    const store = useStore()

    const loginForm = ref({})

    const login = () => {
      store.dispatch('login', loginForm.value)
    }

    return { loginForm, login }
  }
}
</script>

<style>

</style>
