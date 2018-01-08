import Vue from 'vue'
import Router from 'vue-router'
import componentsView from '../components/componentsView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'componentsView',
      component: componentsView
    }
  ]
})
