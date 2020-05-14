import axios from 'axios'
import store from '@/store'
import router from '../router'
import {Toast} from 'vant'
// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'http://gyys.api.gaoxiaodayin.com'
// } else if (process.env.NODE_ENV === 'debug') {
//   axios.defaults.baseURL = 'http://gyys.api.gaoxiaodayin.com'
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = 'http://gyys.api.gaoxiaodayin.com'
// }
axios.defaults.timeout = 10000

axios.interceptors.request.use(config => {
  const token = store.state.token
  token && (config.headers.token = token)
  return config
},
error => {
  return Promise.error(error)
}
)

axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
},
error => {
  if (error.response.status) {
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        router.replace({
          path: 'login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
        break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
      case 403:
        Toast({
          message: '登录过期，请重新登录',
          duration: 2000,
          forbidClick: true
        })
        localStorage.removeItem('token')
        store.commit('DELETE_TOKEN')
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
        }, 1000)
        break
        // 404请求不存在
      case 404:
        Toast({
          message: '网络请求不存在',
          duration: 1500,
          forbidClick: true
        })
        break
        // 其他错误，直接抛出错误提示
      default:
        Toast({
          message: error.response.data.message,
          duration: 1500,
          forbidClick: true
        })
    }
    return Promise.reject(error.response)
  }
})
