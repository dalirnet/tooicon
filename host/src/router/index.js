import Vue from 'vue'
import VueRouter from 'vue-router'
import Icon from '../views/Icon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Icon',
    component: Icon
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
