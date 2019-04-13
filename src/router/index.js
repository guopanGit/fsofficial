import Vue from 'vue'
import Router from 'vue-router'

import Navigation from '../components/Navigation/Navigation'
import Home from '../components/Navigation/Home/Home'
import Retail from '../components/Navigation/Retail/Retail'
import Social from '../components/Navigation/Social/Social'
import Husbandry from '../components/Navigation/Husbandry/Husbandry'
import Applet from '../components/Navigation/Applet/Applet'
import Case from '../components/Navigation/Case/Case'
import Scheme from '../components/Navigation/Scheme/Scheme'
import About from '../components/Navigation/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home',
    },
    {
      path: '/Navigation',
      redirect: 'Home',
    },
    {
      path: '/',
      name: 'Navigation',
      component: Navigation,
      children:[
        {
          path:'Home',
          component: Home,
        },
        {
          path:'Retail',
          component:Retail
        },
        {
          path:'Social',
          component:Social
        },
        {
          path:'Husbandry',
          component:Husbandry
        },
        {
          path:'Applet',
          component:Applet
        },
        {
          path:'Case',
          component:Case
        },
        {
          path:'Scheme',
          component:Scheme
        },
        {
          path:'About',
          component:About
        },
      ]
    }
  ]
})
