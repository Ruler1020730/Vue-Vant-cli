import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由
import store from './store' // vuex
import './request/config' // 请求配置文件
import './plugins/vantComponents' // vant 按需引入文件
import 'amfe-flexible' // rem适配方案

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
