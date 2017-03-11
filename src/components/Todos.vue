<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CreateTodo />
    <ul>
      <li @click="setUser('Marshall')">Marshall</li>
      <li @click="setUser('Aubree')">Aubree</li>
    </ul>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Created By</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos">
          <td>{{todo.name}}</td>
          <td>{{todo.createdBy}}</td>
        </tr>
      </tbody>
    </table>
    <div>{{todos.length}} todos created by {{user}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreateTodo from './CreateTodo'

export default {
  name: 'todos',
  created () {
    // Pull data into the store
    this.findTodosOnServer({
      query: {
        $sort: {createdAt: 1},
        $limit: 50
      }
    })
  },
  data () {
    return {
      msg: 'Todos',
      user: 'Marshall'
    }
  },
  computed: {
    todos () {
      return this.findTodosInStore({query: {createdBy: this.user}}).data
    },
    ...mapGetters('todos', { findTodosInStore: 'find' })
  },
  methods: {
    setUser (name) {
      this.user = name
    },
    ...mapActions('todos', {findTodosOnServer: 'find'})
  },
  components: {
    CreateTodo
  }
}
</script>
