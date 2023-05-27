import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Typography from '../pages/Typography.vue'
import Campains from '../pages/Campains.vue'
import CreateCampaign from '../pages/CreateCampaign.vue'

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
  routes
})

export default router
