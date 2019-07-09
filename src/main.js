import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 引入flexible 设置rem标准值

// 先暂时全部引入，便于使用
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
/**
 * 后边再按需引入，利于打包结果
 */
// import {
//   Button,
//   Tabbar,
//   TabbarItem,
//   NavBar
// } from 'vant'
// Vue
//   .use(Button)
//   .use(Tabbar)
//   .use(TabbarItem)
//   .use(NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
