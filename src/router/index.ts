import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import APOD from '../views/APOD.vue'

import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: '/apod',
    name: 'Astronomy picture of the day',
    component: APOD
  },
  {
    path: '/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
