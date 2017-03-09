<template>
  <router-view></router-view>
</template>

<script>
import 'getbase/dist/css/styles.css'
import '@/styles/chat.css'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapActions('auth', ['authenticate'])
  },
  created () {
    this.authenticate().then(() => this.$router.replace({name: 'Chat'}))
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
