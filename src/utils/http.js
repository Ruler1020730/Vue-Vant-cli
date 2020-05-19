import QS from 'qs'
import service from './request'
function request(method, url, params, hideloading) {
  return service({
    method: method,
    url,
    data: QS.stringify(params),
    hideloading
  })
}
export default request
