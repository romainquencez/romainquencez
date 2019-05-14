import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCalendarAlt, faCar, faHome, faMoon, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueHead from 'vue-head'
import VueAnalytics from 'vue-analytics'

library.add(faEnvelope, faCalendarAlt, faCar, faHome, faMedium, faMoon, faDownload)
library.add(faGithub, faLinkedinIn, faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueHead)
Vue.use(VueAnalytics, {
  id: 'UA-61028925-1'
})
