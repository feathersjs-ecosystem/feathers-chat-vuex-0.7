<template>
<main class="login container">
  <div class="row">
    <div class="col-12 col-6-tablet push-3-tablet text-center">
      <h1 class="font-100">Welcome Back</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
      <form class="form" method="post" @submit.prevent="onSubmit(email, password)">
        <fieldset>
          <input class="block" type="email" name="email" placeholder="email" v-model="email">
        </fieldset>

        <fieldset>
          <input class="block" type="password" name="password" placeholder="password" v-model="password">
        </fieldset>

        <button type="submit" class="button button-primary block login">
          Login
        </button>
        
        <router-link as="button" :to="{name: 'Home'}" class="button button-secondary block">Back</router-link> 
      </form>
    </div>
  </div>
</main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit (email, password) {
      this.authenticate({strategy: 'local', email, password})
    },
    ...mapActions('auth', ['authenticate'])
  }
}
</script>
