<template>
  <main id="chat" class="flex flex-column">
    <header class="title-bar flex flex-row flex-center">
      <div class="title-wrapper block center-element">
        <img class="logo" src="http://feathersjs.com/img/feathers-logo-wide.png" alt="Feathers Logo">
        <span class="title">Chat</span>
      </div>
    </header>
    <div class="flex flex-row flex-1 clear" v-if="user">

      <user-list :users="users"
        :logout="logout" />
        
      <message-list :messages="messages"
        :findMessages="findUsers" 
        :createMessage="createMessage" />
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import UserList from './Users'
import MessageList from './Messages'

export default {
  name: 'chat-app',
  data () {
    return {
      ...mapState('auth', ['user'])
    }
  },
  computed: {
    ...mapGetters('users', { users: 'list' }),
    ...mapGetters('messages', { messages: 'list' })
  },
  methods: {
    ...mapActions('messages', { findMessages: 'find', createMessage: 'create' }),
    ...mapActions('users', { findUsers: 'find' }),
    ...mapActions('auth', ['logout'])
  },
  created () {
    if (!this.user()) {
      this.$router.replace({name: 'Login'})
    }
  },
  mounted () {
    if (this.user()) {
      // Query users from Feathers
      this.findUsers({
        query: {
          $sort: {createdAt: -1},
          $limit: 25
        }
      })
      // Query messages from Feathers
      this.findMessages({
        query: {
          $sort: {createdAt: -1},
          $limit: 25
        }
      })
      // .then(page => {
      //   // TODO: Move this to a computed property
      //   page.data.reverse()
      //   this.messages = page.data
      //   this.scrollToBottom()
      // })
    }
  },
  components: {
    UserList,
    MessageList
  }
}
</script>

<style scoped>
main#chat {
  height: 100%;
}
</style>
