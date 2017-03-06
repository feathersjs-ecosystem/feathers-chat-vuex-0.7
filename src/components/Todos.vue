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
        <tr v-for="todo in findList(query)">
          <td>{{todo.name}}</td>
          <td>{{todo.createdBy}}</td>
        </tr>
      </tbody>
    </table>
    <div>{{findList(query).length}} todos created by {{user}}</div>
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
    query () {
      return {query: {createdBy: this.user}}
    },
    ...mapGetters('todos', ['list', 'findList'])
  },
  methods: {
    setUser (name) {
      this.user = name
    },
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
