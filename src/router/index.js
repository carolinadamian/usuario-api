import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../components/registro.vue')
    },
    {
      path: '/pokeAPI',
      name: 'pokeAPI',
      component: () => import('../components/pokeAPI.vue')
    }
  ]
})

export default router
