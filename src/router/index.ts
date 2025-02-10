import { createRouter, createWebHistory } from 'vue-router'
import MonstrHome from '../views/MonstrHome.vue'
import ErrorPage from '@/components/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MonstrHome,
    },
    {
      path: '/:pathMatch(.*)*', // Catch all undefined routes
      name: 'ErrorPage',
      component: ErrorPage,
    },
  ],
})

export default router
