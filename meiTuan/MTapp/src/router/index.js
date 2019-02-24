import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/defaultPage.vue'
import blankPage from '@/layout/blankPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage
    },
    {
      path: '/blankPage',
      name: 'blankPage',
      component: blankPage
    },
  ]
})
