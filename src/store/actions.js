import Post from '@/api/posts'
import Resume from '@/api/resume'
import Info from '@/api/info'
import * as types from './mutation-types'

export const getPosts = ({ commit, state }) => {
  return Post.all(state).then(response => {
    commit(types.SET_POSTS, response.data)
  })
}

export const getResume = ({ commit, state }) => {
  return Resume.all(state).then(response => {
    commit(types.SET_RESUME, response.data)
  })
}

export const getInfo = ({ commit, state }) => {
  return Info.all(state).then(response => {
    commit(types.SET_INFO, response.data)
  })
}

export const setDarkMode = ({ commit, state }, value) => {
  commit(types.SET_DARK_MODE, value)
}

export const setLang = ({ commit, state }, lang) => {
  commit(types.SET_LANG, lang)
}
