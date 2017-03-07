<template>
<main class="login container">
  <div class="row">
    <div class="col-12 col-6-tablet push-3-tablet text-center">
      <h1 class="font-100">Welcome Back</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
      <form class="form" method="post" action="/auth/local">
        <fieldset>
          <input class="block" type="email" name="email" placeholder="email" v-model="email">
        </fieldset>

        <fieldset>
          <input class="block" type="password" name="password" placeholder="password" v-model="password">
        </fieldset>

        <button type="submit" @submit.prevent="onSubmit(email, password)" class="button button-primary block login">
          Login
        </button>
      </form>
    </div>
  </div>
</main>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit (email, password) {

    }
  }
}
</script>