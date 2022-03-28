import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../utilities/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const store = createStore({
  state: {
    todos: [], // Array todos
    editableTodo: null, // todo edit
    showModalDelete: false,

    user: null
  },
  mutations: {
    setStoreKey (state, { key, value }) {
      state[key] = value
    },
    setUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = null
    },
    addTodo: function (state, todoText) {
      state.todos.push({
        id: Date.now(),
        text: todoText,
        done: false
      })
    },
    deleteTodo: function (state, id) {
      state.todos = state.todos.filter(item => item.id !== id)
    },
    updateTodo: function (state, id) {
      state.todos = state.todos.map(item => {
        if (item.id === id) {
          item.done = true
        }
        return item
      })
    }
  },
  actions: {
    async login ({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('Usuarion no funciona')
            break
          case 'auth/wrong-password':
            alert('Contreseña incorrecta')
            break
          default:
            alert('Algo salió mal')
        }
        return
      }
      commit('setUser', auth.currentUser)
      router.push('/')
    },
    async register ({ commit }, details) {
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Correo en uso')
            break
          case 'auth/invalid-email':
            alert('Correo invalido')
            break
          case 'auth/operation-not-allowed':
            alert('Operación no permitida')
            break
          case 'auth/weak-password':
            alert('Contraseña debil')
            break
          default:
            alert('Algo salió mal')
        }
        return
      }
      commit('setUser', auth.currentUser)
      router.push('/')
    },
    async logout ({ commit }) {
      await signOut(auth)
      commit('clearUser')
      router.push('/login')
    },
    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('clearUser')
        } else {
          commit('setUser', user)

          if (router.isReady() && router.currentRoute.value.path === '/signup') {
            router.push('/')
          }
          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
  }

})

export default store
