import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    posts: [],
    resume: [],
    me: [],
    pages: [
      {
        name: 'CV',
        url: 'resume',
        icon: 'map-marked'
      },
      {
        name: 'Articles',
        url: 'posts',
        icon: 'rss'
      },
      {
        name: 'Contact',
        url: 'contact',
        icon: 'envelope'
      }
    ]
  }
})
