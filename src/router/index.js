import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TodoHome.vue'

const routes = [
  {
    path: '/',
    name: 'TodoHome',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
