<template>
  <form @submit.prevent="submit({name})">
    <div><input type="text" v-model="name"></div>
    <div v-if="current">Current: <input type="text" v-model="current.name"> id: {{current._id}}</div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'create-todo',
  data () {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters('todos', ['current'])
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
