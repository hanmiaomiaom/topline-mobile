import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 初始化时，从本地存储获取用户信息（里边有token等内容）,防止舒心丢失token
    user: auth.getUser()
  },
  mutations: {
    // 登录成功，调用mutation 更新容器中的user的状态
    setUser (state, user) {
      state.user = user
      // 持久化到本地存储，防止页面刷新状态丢失
      auth.saveUser(state, user)
    }
  },
  actions: {

  }
})
