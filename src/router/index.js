import Vue from 'vue'
import Router from 'vue-router'
import Cabinet from '@/pages/cabinet'
import Dashboard from '@/pages/Dashboard'
import Teachers_registration from '@/pages/Teachers-registration'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Cabinet
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/teachers-reg',
      component: Teachers_registration
    },
  ]
})