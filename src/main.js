import Vue from 'vue'
import '@/plugins'
import '@/settings'
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
  template: '<App/>'
})
