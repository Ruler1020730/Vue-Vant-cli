import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * 路由懒加载
 * @param file 文件基本路径 名称
 * @returns {function(): (Promise<*>|*)}
 * @private
 */
const _import_ = file => () => import('@/views/' + file + '.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: _import_('Layout/index'),
    redirect: '/home',
    children: [
      { path: 'home', component: _import_('home/Home'), name: 'home'},
      { path: 'list', component: _import_('list/List'), name: 'list'}
    ]
  }
]

const router = new VueRouter({
  mode: 'history', // 路由模式
  base: process.env.BASE_URL,
  routes
})

export default router
