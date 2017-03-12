<template>
  <div class="flex flex-column col col-9">
    <main class="chat flex flex-column flex-1 clear">
      <single-message v-for="message in messages" key="message._id" :message="message" v-cloak />
    </main>
    <ComposeMessage :createMessage="createMessage" />
  </div>
</template>

<script>
import ComposeMessage from './Composer.vue'
import SingleMessage from './Message.vue'

export default {
  name: 'message-list',
  data () {
    return {
      // TODO: Fix the placeholder
      placeholder: 'PLACEHOLDER'
    }
  },
  props: {
    messages: Array,
    findMessages: Function,
    createMessage: Function
  },
  methods: {
    scrollToBottom () {
      this.$nextTick(() => {
        const node = this.$el.getElementsByClassName('chat')[0]
        node.scrollTop = node.scrollHeight
      })
    }
  },
  watch: {
    messages () {
      this.messages.length && this.scrollToBottom()
    }
  },
  components: {
    ComposeMessage,
    SingleMessage
  }
}
</script>

<style>
main.chat {
  padding: 10px;
  overflow-y: scroll;
}

main.chat img.avatar {
  border-radius: 100%;
  height: 45px;
  width: 45px;
  flex: none;
}

main.chat .message {
  flex: 0 0 auto;
}

main.chat .message img.avatar {
  margin-right: 10px;
}

main.chat .message p.message-header {
  margin: 0;
  font-size: 0.9em;
}

main.chat .message p.message-header span.sent-date {
  color: #969696;
}
</style>
