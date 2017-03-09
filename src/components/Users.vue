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
  name: 'user-list',
  props: {
    users: Array,
    logout: Function
  }
}
</script>
