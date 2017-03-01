<template>
  <form @submit.prevent="createTodo({name})">
    <input type="text" v-model="name">
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'create-todo',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    createTodo (todo) {
      this.create(todo)
    },
    ...mapActions('todos', ['create'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
