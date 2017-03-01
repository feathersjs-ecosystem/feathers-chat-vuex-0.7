import feathers from 'feathers'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'
import feathersVuex from '@/feathers-vuex/'
import store from '@/store/'

const socket = io('http://localhost:3030', {transports: ['websocket']})

const feathersClient = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth())
  .configure(feathersVuex(store))

feathersClient.service('/todos').vuex({idField: '_id'})
feathersClient.service('/deeply/nested/names')
feathersClient.service('/explicit/namespace').vuex({name: '/explicit/namespace'})

export default feathersClient
