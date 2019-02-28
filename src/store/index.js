import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    resume: [],
    me: [],
    pages: [
      {
        name: 'Articles',
        url: 'posts',
        icon: 'fas fa-rss'
      },
      {
        name: 'CV',
        url: 'resume',
        icon: 'fas fa-map-marked'
      },
      {
        name: 'Contact',
        url: 'contact',
        icon: 'fas fa-envelope'
      }
    ]
  }
})
