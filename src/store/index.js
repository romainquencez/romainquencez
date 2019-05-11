import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    posts: [],
    resume: [],
    info: [],
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
    ],
    darkMode: false,
    langs: [
      {
        id: 'fr',
        flag: '🇫🇷',
        label: 'Français'
      },
      {
        id: 'en',
        flag: '🇺🇸',
        label: 'English'
      }
    ],
    lang: 'fr'
  },
  mutations,
  actions
})
