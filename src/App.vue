<template>
  <router-view></router-view>
</template>

<script>
import 'getbase/dist/css/styles.css'
import './styles/chat.css'
import { mapActions } from 'vuex'

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
  methods: {
    ...mapActions('auth', ['authenticate'])
  },
  mounted () {
    this.authenticate().catch(error => {
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
