// import Vue from 'vue'
import router from './index'
import store from '../store'
import {weChatLogin} from '../api/login'
import {Toast} from 'vant'

router.beforeEach(async(to, from, next) => {
  const token = to.query.token
  if (token) store.commit('SET_TOKEN', token)
  if (store.getters.token) {
    store.dispatch('userInfo').then(res => {
      store.commit('USER_INFO', res)
      next()
    })
  } else {
    if (!token) {
      const url = window.location.href
      try {
        const res = await weChatLogin({curUrl: url})
        if (res.code === 200) {
          window.location.href = res.data.AuthUrl
        }
      } catch (err) {
        Toast('err')
      }
    }
  }
})
