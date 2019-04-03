import Post from '@/api/posts'
import Resume from '@/api/resume'
import Info from '@/api/info'
import { assign } from 'lodash'
import * as types from './mutation-types'

export const getPosts = ({ commit, state }) => {
  return Post.all(state).then(response => {
    const prefix = '])}while(1);</x>'
    const { Post } = JSON.parse(response.data.replace(prefix, '')).payload.references
    const prefixImage = 'https://cdn-images-1.medium.com/max/800/'
    const prefixUrl = 'https://medium.com/@romainquencez/'
    const posts = Object.values(Post).map(
      ({ id, title, createdAt, virtuals, uniqueSlug }) => assign({}, {
        id,
        title,
        createdAt: new Date(createdAt),
        subTitle: virtuals.subtitle,
        image: virtuals.previewImage.imageId ? `${prefixImage}${virtuals.previewImage.imageId}` : null,
        url: `${prefixUrl}${uniqueSlug}`,
        tags: virtuals.tags
      })
    )
    console.log(posts)
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

export const setDarkMode = ({ commit, state }, value) => {
  commit(types.SET_DARK_MODE, value)
}
