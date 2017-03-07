<template>
  <aside class="sidebar col col-3 flex flex-column flex-space-between">
    <header class="flex flex-row flex-center">
      <h4 class="font-300 text-center"><span class="font-600 online-count" v-cloak>{{ users.length }}</span> users</h4>
    </header>
    <ul class="flex flex-column flex-1 list-unstyled user-list">
      <li v-for="(user, index) in users" track-by="index" v-cloak>
        <a class="block relative" href="#">
          <img :src="user.avatar || dummyUser.avatar" alt="" class="avatar">
          <span class="absolute username">{{ user.email || dummyUser.email }}</span>
        </a>
      </li>
    </ul>
    <footer class="flex flex-row flex-center">
      <a href="#" class="logout button button-primary" @click="logout">Sign Out</a>
    </footer>
  </aside>
</template>

<script>
export default {
  name: 'todos',
  data () {
    return {
      msg: 'Welcome Home'
    }
  },
  mounted () {
    // Find all users
    userService.find().then(page => {
      this.users = page.data
    })
    // We will also see when new users get created in real-time
    userService.on('created', user => {
      this.users.push(user)
    })
  },
  methods: {
    logout () {
      app.logout().then(() => {
        vm.user.authenticated = false
        window.location.href = '/index.html'
      })
    }
  }
}
</script>