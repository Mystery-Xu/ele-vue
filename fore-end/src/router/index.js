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
    }
  ]
})

export default router
