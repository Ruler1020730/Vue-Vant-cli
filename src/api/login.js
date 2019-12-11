import {get, post} from '../request/http'

/**
 * 获取token
 * @param params
 */
export function getToken(params) {
  return get('/hhh', params)
}

export function getUserInfo(params) {
  return post('/hhh', params)
}
