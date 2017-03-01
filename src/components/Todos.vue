<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="todo in data">
        {{description}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'todos',
  data () {
    return {
      msg: 'Todos'
    }
  },
  computed: {
    ...mapGetters('todos', [
      'data'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
