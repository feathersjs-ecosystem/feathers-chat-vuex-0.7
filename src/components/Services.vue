<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <thead>
        <tr>
          <td>Path</td>
          <td>Namespace in Vuex Store</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in services">
          <td>{{service.path}}</td>
          <td>{{service.vuexOptions.module.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'services',
  data () {
    return {
      msg: 'Services'
    }
  },
  computed: {
    ...mapGetters('feathers', [
      'services'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  margin: 0 auto;
  background: #EEE;
  padding: 10px 20px;
}
thead {
  font-weight: bold;
}
</style>
