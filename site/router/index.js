import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/main'
import Guide from '@/views/guide/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    }
  ]
})
