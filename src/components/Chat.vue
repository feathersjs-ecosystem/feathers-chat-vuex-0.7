<template>
  <div id="app" class="flex flex-column">
    <header class="title-bar flex flex-row flex-center">
      <div class="title-wrapper block center-element">
        <img class="logo" src="http://feathersjs.com/img/feathers-logo-wide.png" alt="Feathers Logo">
        <span class="title">Chat</span>
      </div>
    </header>
    <div class="flex flex-row flex-1 clear" v-if="user">
      <user-list :users="users" :logout="logout"></user-list>
      <messages />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import UserList from './Users'
import Messages from './Messages'

export default {
  name: 'chat-app',
  data () {
    return {
      ...mapState('auth', ['user'])
    }
  },
  computed: {
    ...mapGetters('users', {
      users: 'list'
    })
  },
  methods: {
    ...mapActions('users', {
      findUsers: 'find'
    }),
    ...mapActions('auth', ['logout'])
  },
  created () {
    if (!this.user()) {
      this.$router.replace({name: 'Login'})
    }
  },
  mounted () {
    // Find the latest 10 messages. They will come with the newest first
    // which is why we have to reverse before adding them
    this.user() && this.findUsers({
      query: {
        $sort: {createdAt: -1},
        $limit: 25
      }
    })
    // TODO: Move this to a computed property
    // .then(page => {
    //   page.data.reverse()
    //   this.messages = page.data
    //   this.scrollToBottom()
    // })
  },
  components: {
    UserList,
    Messages
  }
}
</script>
