<template>
  <div class="flex flex-column col col-9">
    <main class="chat flex flex-column flex-1 clear">
      <div class="message flex flex-row" v-for="(message, index) in messages" track-by="index" v-cloak>
        <single-message :message="message" />
      </div>
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
