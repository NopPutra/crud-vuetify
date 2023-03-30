import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from "../views/ProductView";

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
    component: ProductView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
