<template>
  <div class="flex flex-column col col-9">
    <main class="chat flex flex-column flex-1 clear">
      <div class="message flex flex-row" v-for="(message, index) in messages" track-by="index" v-cloak>
        <message :message="message"></message>
      </div>
    </main>

    <ComposeMessage />
  </div>
</template>

<script>
import ComposeMessage from './Composer.vue'

export default {
  data () {
    return {
      placeholder: 'PLACEHOLDER',
      messages: []
    }
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
    ComposeMessage
  }
}
</script>
