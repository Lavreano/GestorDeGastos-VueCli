import Vue from 'vue'
import VueRouter from 'vue-router'
import GestorGastos from '../views/GestorGastos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Gestor',
    component: GestorGastos
  },
  {
    path: '/ayuda',
    name: 'ayuda',
    component: () => import('../views/CentroAyuda.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
