<template>
  <div class="flex flex-column col col-9">
    <main class="chat flex flex-column flex-1 clear">
      <single-message v-for="message in messages" key="message._id" :message="message"/>
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
      placeholder: 'PLACEHOLDER'
    }
  },
  props: {
    messages: Array,
    findMessages: Function,
    createMessage: Function
  },
  methods: {
    scrollToBottom: vm => {
      vm.$nextTick(() => {
        const node = vm.$el.getElementsByClassName('chat')[0]
        node.scrollTop = node.scrollHeight
      })
    }
  },
  components: {
    ComposeMessage,
    SingleMessage
  }
}
</script>
