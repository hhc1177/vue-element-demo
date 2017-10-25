import Vue from 'vue'
import Router from 'vue-router'
import NavMenu from '@/page/NavMenu'
import Home from '@/page/Home'
import footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavMenu',
      component: NavMenu
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    }
  ]
})
