<template>
<main class="login container">
  <div class="row">
    <div class="col-12 col-6-tablet push-3-tablet text-center">
      <h1 class="font-100">Create an Account</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
      <form class="form" method="post" @submit.prevent="onSubmit(email, password)">
        <fieldset>
          <input class="block"
            v-model="email"
            type="email" 
            name="email" 
            placeholder="email" 
            required>
        </fieldset>

        <fieldset>
          <input class="block" 
            v-model="password"
            type="password" 
            name="password" 
            placeholder="password" 
            required>
        </fieldset>

        <button type="submit" class="button button-primary block signup">
          Signup
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
      email: undefined,
      password: undefined
    }
  },
  methods: {
    onSubmit (email, password) {
      this.createUser({ email, password })
    },
    ...mapActions('users', {
      createUser: 'create'
    })
  }
}
</script>

<style scoped>

</style>
