import Post from '@/api/posts'
import Resume from '@/api/resume'
import Info from '@/api/info'
import * as types from './mutation-types'

export const getPosts = ({ commit, state }) => {
  return Post.all(state).then(response => {
    const posts = response.data
    commit(types.SET_POSTS, { posts })
    return posts
  })
}

export const getResume = ({ commit, state }) => {
  return Resume.all(state).then(response => {
    const resume = response.data
    commit(types.SET_RESUME, { resume })
    return resume
  })
}

export const getInfo = ({ commit, state }) => {
  return Info.all(state).then(response => {
    const info = response.data
    commit(types.SET_INFO, { info })
    return info
  })
}
