import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: () => import('./../views/DashboardView')
  },
  {
    path: '/product',
    name: 'ProductView',
    component: () => import('./../views/ProductView')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
