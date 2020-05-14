import {get, post} from '../request/http'

/**
 * 获取token
 * @param params
 */
export function weChatLogin(params) {
  return get('/api/v1/wx/start-auth', params)
}

/**
 * 获取用户信息
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export function getUserInfo(params) {
  return get('/api/v1/wxinfo/index', params)
}
export function getUserInfo1111xxxx(params) {
  return post('/api/v1/wxinfo/index', params)
}
