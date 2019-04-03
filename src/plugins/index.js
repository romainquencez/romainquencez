import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCalendarAlt, faCar, faHome, faMapMarked, faRss, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Buefy from 'buefy'
import VueHead from 'vue-head'
import moment from 'moment'

library.add(faEnvelope, faCalendarAlt, faCar, faHome, faMapMarked, faRss, faMedium, faMoon)
library.add(faGithub, faLinkedinIn, faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)
Vue.use(VueHead)

Vue.prototype.moment = moment
