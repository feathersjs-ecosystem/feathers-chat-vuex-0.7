<template>
  <div>
    <img :src="message.sentBy.avatar || placeholder" v-bind:alt="message.sentBy.email" class="avatar">
    <div class="message-wrapper">
      <p class="message-header">
        <span class="username font-600">{{ message.sentBy.email }}</span>
        <span class="sent-date font-300">{{ message.createdAt | moment }}</span>
      </p>
      <p class="message-content font-300">{{ message.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'index'],
  template: '#message-template',
  filters: {
    moment: date => {
      return moment(date).format('MMM Do, hh:mm:ss')
    }
  }
}
</script>