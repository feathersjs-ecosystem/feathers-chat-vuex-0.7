<template>
  <div class="flex flex-column col col-9">
    <main class="chat flex flex-column flex-1 clear">
      <div class="message flex flex-row" v-for="(message, index) in messages" track-by="index" v-cloak>
        <message :message="message"></message>
      </div>
    </main>

    <slot></slot>

  </div>
</template>

<script>
export default {
  data () {
    return {
      placeholder: PLACEHOLDER,
      messages: []
    }
  },

  mounted () {
    // Find the latest 10 messages. They will come with the newest first
    // which is why we have to reverse before adding them
    messageService.find({
      query: {
        $sort: {createdAt: -1},
        $limit: 25
      }
    }).then(page => {
      page.data.reverse()
      this.messages = page.data
      this.scrollToBottom()
    })

    // Listen to created events and add the new message in real-time
    messageService.on('created', message => {
      this.messages.push(message)
      this.newMessage = ''
      this.scrollToBottom()
    })
  },

  methods: {
    scrollToBottom: () => {
      vm.$nextTick(() => {
        const node = vm.$el.getElementsByClassName('chat')[0]
        node.scrollTop = node.scrollHeight
      })
    }
  }
}
</script>