import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  //   {
  //   path: '/about',
  //   name: 'about',
  //   component: about

  // },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work.vue'),
  },
  // {
  // path: '/workpage',
  // name: 'workpage',
  // component: () => import('../views/workpage.vue'),
  // },
  {
    path: '/ride-fly',
    name: 'ride-fly',
    component: () => import('../views/ride-fly.vue'),
    },
    {
      path: '/webshop',
      name: 'webshop',
      component: () => import('../views/webshop.vue'),
      },
  {
    path:'/contact',
  component: () => import('../views/contact.vue')
  }
  ]
})

export default router
