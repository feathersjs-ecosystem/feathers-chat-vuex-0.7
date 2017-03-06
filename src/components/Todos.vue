<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CreateTodo />
    <ul>
      <li v-for="todo in list">
        {{todo.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreateTodo from './CreateTodo'

export default {
  name: 'todos',
  created () {
    this.find({
      query: {
        $sort: {createdAt: 1}
      },
      $limit: 25
    })
  },
  data () {
    return {
      msg: 'Todos'
    }
  },
  computed: {
    ...mapGetters('todos', ['list'])
  },
  methods: {
    ...mapActions('todos', ['find'])
  },
  components: {
    CreateTodo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
