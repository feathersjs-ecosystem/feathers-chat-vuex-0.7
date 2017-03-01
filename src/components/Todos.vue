<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CreateTodo />
    <ul>
      <li v-for="todo in data">
        {{todo.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CreateTodo from './CreateTodo'

export default {
  name: 'todos',
  data () {
    return {
      msg: 'Todos'
    }
  },
  computed: {
    ...mapGetters('todos', ['data'])
  },
  components: {
    CreateTodo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
