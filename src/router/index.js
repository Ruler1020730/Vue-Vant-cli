import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import {login} from './modules/user'

export const router = [
  {
    path: '/',
    name: 'index',
    redirect: 'home',
    component: () => import('@/layout/index'), // 路由懒加载
    meta: {
      title: '首页', // 页面标题
      keepAlive: false // keep-alive 标识
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: 'about',
        component: () => import('@/views/about/index')
      }
    ]
  },
  ...login
]

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({y: 0}),
    routes: router
  })

export default createRouter()
