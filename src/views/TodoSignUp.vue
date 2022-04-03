<template>
  <div class="h-full flex justify-center items-center">
    <div class="w-full md:w-2/3 flex flex-col shadow-xl p-3">
      <h1 class="text-center dark:text-white text-3xl my-8">Crear Cuenta</h1>
      <form @submit.prevent="register" class="w-full">
        <div class="flex flex-col mt-3">
          <label class="text-lg dark:text-white">Correo</label>
          <input type="email" placeholder="Ingrese su correo" class="p-2 rounded-md" v-model="registerForm.email">
        </div>
        <div class="flex flex-col mt-3">
          <label class="text-lg dark:text-white">Contraseña</label>
          <input type="password" placeholder="Ingrese su contraseña" class="p-2 rounded-md" v-model="registerForm.password">
        </div>
        <div class="flex flex-col mt-3">
          <button type="submit" class="dark:text-white dark:bg-indigo-600 rounded-md p-2">Registrarse</button>
          <router-link class="dark:text-white mt-3" :to="{name: 'TodoLogin'}">¿Ya tienes una cuenta?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'TodoSignUp',
  setup () {
    const store = useStore() // Store

    const registerForm = ref({}) // Objet form for user

    const register = () => {
      store.dispatch('register', registerForm.value)
    }

    return { registerForm, register }
  }
}
</script>

<style>

</style>
