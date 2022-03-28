import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../utilities/firebase'
import Home from '../views/TodoHome.vue'
import Login from '../views/TodoLogin.vue'
import SignUp from '../views/TodoSignUp.vue'

const routes = [
  {
    path: '/',
    name: 'TodoHome',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'TodoLogin',
    component: Login
  },
  {
    path: '/signup',
    name: 'TodoSignUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/signup')
  }

  next()
})

export default router
