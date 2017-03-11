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

      <message-list :messages="messages.data"
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
  computed: {
    ...mapState('auth', [
      'user'
    ]),
    ...mapGetters('messages', {
      findMessagesInStore: 'find'
    }),
    ...mapGetters('users', {
      users: 'list'
    }),
    messages () {
      return this.findMessagesInStore({query: { $sort: {createdAt: 1} }})
    }
  },
  methods: {
    ...mapActions('messages', {
      findMessages: 'find',
      createMessage: 'create'
    }),
    ...mapActions('users', {
      findUsers: 'find'
    }),
    ...mapActions('auth', [
      'logout'
    ])
  },
  created () {
    if (!this.user) {
      return this.$router.replace({name: 'Login'})
    }
    // Query users from Feathers
    this.findUsers({
      query: {
        $sort: {email: 1},
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

/* Header */
header.title-bar {
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
}

header.title-bar img.logo {
  width: 100%;
  max-width: 140px;
}

header.title-bar span.title {
  color: #969696;
  font-weight: 100;
  text-transform: uppercase;
  font-size: 1.2em;
  margin-left: 7px;
}
</style>
