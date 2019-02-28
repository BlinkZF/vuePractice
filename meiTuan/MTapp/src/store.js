// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 组件中获取状态：this.$store.state.count
const state = {
  position: {},
  userName: ''
}
// 状态变更函数 随处都可调用 
// 调用方法: 组建中调用:this.$store.commit('setUserName',this.userName)  
const mutations = {
  setPosition (state, value) {
    state.position = value
  },
  setUserName (state, value) {
    state.userName = value
  }
}
// Action 提交的是 mutation，而不是直接变更状态。可以包含任意异步操作。 
// 调用方法:组建中:this.$store.dispatch('xxx') . 使用 mapActions 辅助函数调用
const actions = {
  setPosition ({ commit }, val) {
    // 后端获取当前位置数据
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
