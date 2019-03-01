import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/home/MyHome.vue'),
    },
    {
      path: '/discover',
      component: () => import('@/views/discover/MyDiscover.vue'),
    },
    {
      path: '/order',
      component: () => import('@/views/order/MyOrder.vue'),
    },
    {
      path: '/profile',
      component: () => import('@/views/profile/MyProfile.vue'),
    }
  ]
})

export default router
