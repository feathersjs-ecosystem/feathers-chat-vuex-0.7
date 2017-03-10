<template>
  <router-view></router-view>
</template>

<script>
import 'getbase/dist/css/styles.css'
import './styles/chat.css'

export default {
  name: 'app',
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  watch: {
    user (newVal) {
      this.$router.replace({name: 'Chat'})
    }
  },
  mounted () {
    this.$store.dispatch('auth/authenticate').catch(error => {
      if (!error.message.includes('Could not find stored JWT')) {
        console.error(error)
      }
    })
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
