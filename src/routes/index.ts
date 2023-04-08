import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ name: 'Home', path: '/', component: Home }]
})

export default router
