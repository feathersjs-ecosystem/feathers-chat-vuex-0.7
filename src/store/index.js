import Vue from 'vue'
import Vuex from 'vuex'
// import feathersVuex from '../feathers-vuex/'
// import feathersClient from '../api/feathers-client'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    // feathersVuex(feathersClient)
  ]
})
