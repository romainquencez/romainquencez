import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Posts from '@/views/Posts'
import Resume from '@/views/Resume'
import Contact from '@/views/Contact'
import VueAnalytics from 'vue-analytics'
import settings from '@/settings'

Vue.use(Router)

const router = new Router({
  base: '',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

Vue.use(VueAnalytics, {
  id: settings.GA_ID,
  router
})

export default router
