import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import ListView from '../views/List/ListView.vue'
import AddressView from '../views/FormAddress/AddressView.vue'
import VooView from '../views/FormVoo/VooView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lista',
      name: 'lista',
      component: ListView
    },
    {
      path: '/cadastro-endereco',
      name: 'cadastro-endereco',
      component: AddressView
    },
  ]
})

export default router
