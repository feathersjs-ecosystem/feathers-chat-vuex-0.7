<template>
  <aside class="sidebar col col-3 flex flex-column flex-space-between">
    <header class="flex flex-row flex-center">
      <h4 class="font-300 text-center">
        <span class="font-600 online-count" v-cloak>{{ users.length }}</span> {{plural}}
      </h4>
    </header>
    <ul class="flex flex-column flex-1 list-unstyled user-list">
      <li v-for="(user, index) in users" track-by="index">
        <a class="block relative" href="javascript://">
          <img :src="user.avatar || dummyUser.avatar" alt="" class="avatar">
          <span class="absolute username">{{ user.email || dummyUser.email }}</span>
        </a>
      </li>
    </ul>
    <footer class="flex flex-row flex-center">
      <a href="javascript://" class="logout button button-primary" @click="logout">Sign Out</a>
    </footer>
  </aside>
</template>

<script>
export default {
  name: 'user-list',
  data () {
    return {
      dummyUser: [
        {
          email: 'noemail',
          avatar: 'https://s.gravatar.com/avatar/7eb0f9eac6df7e6be3971144999a2152?s=200'
        }
      ]
    }
  },
  computed: {
    plural () {
      return this.users.length === 1 ? 'user' : 'users'
    }
  },
  props: {
    users: Array,
    logout: Function
  }
}
</script>

<style>
aside.sidebar {
  background: #f8f8f8;
  max-width: 340px;
  padding: 15px;
  border-right: 1px solid #f1f1f1;
}

aside.sidebar .online-count {
  color: #31D8A0;
  margin-right: 5px;
}

aside.sidebar h4 {
  margin: 0 0 20px 0;
  color: #C3C3C3;
}

aside.sidebar .user-list {
  overflow-y: scroll;
}

aside.sidebar li {
  margin: 15px 0;
}

aside.sidebar li > a {
  color: #555555;
}

aside.sidebar li > a:hover > span,
aside.sidebar li > a:focus > span, {
  color: #31D8A0;
}

aside.sidebar img.avatar {
  border-radius: 100%;
  height: 45px;
  width: 45px;
  margin-right: 10px;
}

aside.sidebar .username {
  position: absolute;
  line-height: 45px;
}
</style>
