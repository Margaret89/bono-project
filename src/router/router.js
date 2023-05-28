import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Typography from '../pages/Typography.vue'
import Campains from '../pages/Campains.vue'
import CreateCampaign from '../pages/CreateCampaign.vue'
import Auth from '../pages/Auth.vue'
import Leads from '../pages/Leads.vue'
import Profile from '../pages/Profile.vue'
import Users from '../pages/Users.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/typography',
    component: Typography
  },
  {
    path: '/campains',
    component: Campains
  },
  {
    path: '/create-campain',
    component: CreateCampaign
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/leads',
    component: Leads
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/users',
    component: Users
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active"
})

export default router
