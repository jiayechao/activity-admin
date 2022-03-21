import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/edit',
    name: 'edit-page',
    component: () => import('../views/Edit/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
