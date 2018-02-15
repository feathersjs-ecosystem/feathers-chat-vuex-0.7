import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from '../api/feathers-client'

Vue.use(Vuex)

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

export default new Vuex.Store({
  plugins: [
    service('users'),
    service('messages'),

    auth({
      userService: 'users'
    })
  ]
})
