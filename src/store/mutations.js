import * as types from './mutation-types'

export default {
  [types.SET_POSTS] (state, { posts }) {
    state.posts = posts
  },
  [types.SET_RESUME] (state, { resume }) {
    state.resume = resume
  },
  [types.SET_INFO] (state, { info }) {
    state.info = info
  }
}
