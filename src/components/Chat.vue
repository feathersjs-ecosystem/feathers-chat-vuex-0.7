<template>
  <div id="app" class="flex flex-column">
    <header class="title-bar flex flex-row flex-center">
      <div class="title-wrapper block center-element">
        <img class="logo" src="http://feathersjs.com/img/feathers-logo-wide.png" alt="Feathers Logo">
        <span class="title">Chat</span>
      </div>
    </header>
    <div class="flex flex-row flex-1 clear" v-if="user.authenticated">
      <user-list></user-list>
      <message-list>
        <compose-message></compose-message>
      </message-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat-app',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // access to component instance via `vm`
    })
  }
}
</script>
