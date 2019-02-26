import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/defaultPage.vue'
import blankPage from '@/layout/blankPage.vue'
import goodList from '@/page/goodList.vue'
import index from '@/page/index.vue'
import changeCity from '@/page/changeCity.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: goodList
        },
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: changeCity
        }
      ]
    },
    {
      path: '/blankPage',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
