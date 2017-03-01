import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Todos from '@/components/Todos'
import Services from '@/components/Services'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', name: 'Home', component: Home },
    { path: '/todos', name: 'Todos', component: Todos },
    { path: '/services', name: 'Services', component: Services }
  ]
})
