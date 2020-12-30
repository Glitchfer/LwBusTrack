import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Print from '../components/_module/Print.vue'
// import Print from '../components/_module/Form.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/print',
    name: 'print',
    component: Print
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
