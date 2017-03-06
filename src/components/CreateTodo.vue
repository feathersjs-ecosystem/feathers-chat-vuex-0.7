<template>
  <form @submit.prevent="submit({name})">
    <div><input type="text" v-model="name"></div>
    <div v-if="copy">{{copy}}copy: <input type="text" v-model="copy.name"> id: {{copy._id}}</div>
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
  computed: {
    copy () {

    }
  },
  methods: {
    submit (todo) {
      this.create(todo)
      this.name = ''
      // if (this.current) {
        // this.update(this.current.id, {name: 'hi'})
      // }
      // this.clearCurrentId()
    },
    ...mapActions('todos', [
      'create',
      'update',
      'clearCurrentId'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
