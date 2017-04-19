import Vue from 'vue/dist/vue'
// import UserList from './Users.vue'
import UserList from '@/components/Chat/Users.vue'

let users = [
  {
    email: 'marshall@bitovi.com',
    avatar: 'https://s.gravatar.com/avatar/7eb0f9eac6df7e6be3971144999a2152?s=200'
  }
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      users
    }
  },
  components: {
    UserList
  }
})
