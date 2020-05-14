import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由
import './router/permission'
import store from './store' // vuex
import './request/config' // 请求配置文件
import './plugins/vantComponents' // vant 按需引入文件
import 'amfe-flexible' // rem适配方案
import './style/index.less'
import 'vant/lib/index.less'
import moment from 'moment'

Vue.prototype.$imgUrl = 'http://gyys.image.gaoxiaodayin.com/'

Vue.config.productionTip = false
Vue.prototype.$moment = moment
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
