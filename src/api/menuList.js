import {get} from '../request/http'

/**
 * 获取menuList
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export function getMenuList(params) {
  return get('/api/v1/menus/list', params)
}
/**
 * 获取menuList
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export function getAreas(params) {
  return get('/api/v1/menus/get-areas', params)
}
/**
 * 获取区域List
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export function schoolAreas(params) {
  return get('/api/v1/wxinfo/areas-list', params)
}
