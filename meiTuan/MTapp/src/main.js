// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 绑定自定义事件
Vue.directive('document-click', {
  bind (el, binding, vnode) { // 只调用一次，指令第一次绑定到元素时调用
    document.addEventListener('click', binding.value, false)
  },
  inserted (el, binding, vnode) { // 被绑定元素插入父节点时调用
  },
  update (el, binding, vnode) { // 所在组件的 VNode 更新时调用
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
