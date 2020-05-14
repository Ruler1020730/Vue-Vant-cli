import {getUserInfo} from '../api/login'

export default {
  userInfo() {
    return new Promise(async(resolve, reject) => {
      const res = await getUserInfo()
      if (res.code === 200) {
        resolve(res.data)
      } else {
        reject(res)
      }
    })
  }
}
