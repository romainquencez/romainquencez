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
        name: {
          fr: 'CV',
          en: 'Resume'
        },
        url: 'resume',
        icon: 'map-marked'
      },
      {
        name: {
          fr: 'Articles',
          en: 'Posts'
        },
        url: 'posts',
        icon: 'rss'
      },
      {
        name: {
          fr: 'Contact',
          en: 'Contact'
        },
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
