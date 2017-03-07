<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'getbase/dist/css/styles.css'
import '@/styles/chat.css'

export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
