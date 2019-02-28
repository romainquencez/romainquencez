import Vue from 'vue'
import '@/plugins'
import store from '@/store'
import router from '@/router'
import App from '@/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created: function () {
    this.$store.state.posts = require('@/assets/data/posts.json')
    this.$store.state.posts.forEach(function (post) {
      post.publicationDate = new Date(post.publicationDate)
    })
    this.$store.state.posts.sort(function (a, b) {
      return b.publicationDate.getTime() - a.publicationDate.getTime()
    })
    this.$store.state.resume = require('@/assets/data/resume.json')
    this.$store.state.me = require('@/assets/data/me.json')
  }
})
