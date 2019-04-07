import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Posts from '@/views/Posts'
import Resume from '@/views/Resume'
import Contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  base: process.env.NODE_ENV === 'development' ? '/' : '/romainquencez/',
  mode: 'history',
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
