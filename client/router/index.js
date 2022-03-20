import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/shap',
    name: 'Shap',
    component: () => import('../views/Shap.vue')
  },
  {
    path: '/shap-demo',
    name: 'Shap-demo',
    component: () => import('../views/shap-demo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
