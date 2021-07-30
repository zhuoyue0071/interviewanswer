import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '../views/one'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'one',
    redirect: '/one',
    component: One
  },
  {
    path: '/one',
    name: 'One',
    component: One
  },
  {
    path: '/two',
    name: 'Two',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "two" */ '../views/two.vue')
    }
  },
  {
    path: '/three',
    name: 'Three',
    component: function () {
      return import(/* webpackChunkName: "three" */ '../views/three.vue')
    }
  },
  {
    path: '/four',
    name: 'Four',
    component: function () {
      return import(/* webpackChunkName: "four" */ '../views/four.vue')
    }
  },
  {
    path: '/five',
    name: 'Five',
    component: function () {
      return import(/* webpackChunkName: "five" */ '../views/five.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
