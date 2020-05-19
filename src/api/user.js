import request from '@/utils/http'
//user api

// 登录
export function login(params) {
  return request('get', '/user/userinfo', params)
}
// 用户信息 post 方法
export function getUserInfo(params) {
  return request('post', '/user/userinfo', params)
}

// 用户名称 get 方法
export function getUserName(params) {
  return request('get', '/user/userinfo', params)
}
