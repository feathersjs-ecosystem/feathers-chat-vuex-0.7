import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Todos from '@/components/Todos'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Chat from '@/components/Chat'
import Services from '@/components/Services'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/chat', name: 'Chat', component: Chat },
    { path: '/todos', name: 'Todos', component: Todos },
    { path: '/services', name: 'Services', component: Services }
  ]
})
