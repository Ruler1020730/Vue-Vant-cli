import {DELETE_TOKEN, USER_INFO, SET_TOKEN} from './mutations-type'

export default {
  [SET_TOKEN]: (state, data) => {
    state.token = data
  },
  [DELETE_TOKEN]: (state) => {
    state = null
  },
  [USER_INFO]: (state, data) => {
    state.userInfo = data
  }
}
