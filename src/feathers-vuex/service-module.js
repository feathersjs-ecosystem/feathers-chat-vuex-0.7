import { getShortName, getNameFromPath, getNameFromConfig } from './utils'
import deepAssign from 'deep-assign'

// export const defaultModuleOptions = {
//   name: undefined,
//   state: {},
//   mutations: {},
//   actions: {},
//   getters: {}
// }

export default function setupServiceModule (store) {
  return function setupServiceOnStore (service, { force }) {
    const { vuexOptions } = service
    const nameStyles = {
      short: getShortName,
      path: getNameFromPath,
      explicit: getNameFromConfig
    }
    let name = nameStyles[vuexOptions.global.nameStyle](service)
    const existingName = service.vuexOptions.module && service.vuexOptions.module.name

    // When .vuex() is manually called, tear down the previous module.
    // Tear down before the module name is updated to remove the correct one.
    if (store.state[existingName] && force) {
      store.unregisterModule(existingName)
    }

    // update the name
    deepAssign(service.vuexOptions, { module: {name} })
    vuexOptions.modules[service.path] = vuexOptions.module

    // Setup or re-setup the module if .vuex() was called manually.
    if (!store.state[name] || force) {
      store.registerModule(name, {
        namespaced: true,
        state: {
          ids: [],
          keyedById: {},
          current: {}
        },
        mutations: {
          ...mapMutations(service)
        },
        actions: {
          ...mapActions(service)
        },
        getters: {
          ...mapGetters(service)
        }
      })
    }
  }
}

export function mapMutations (service) {
  const { vuexOptions } = service
  const idField = vuexOptions.module.idField || vuexOptions.global.idField
  return {
    // Adding a single item also sets the current item.
    addItem (state, payload) {
      state.ids.push(payload[idField])
      state.keyedById = {
        ...state.keyedById,
        [payload[idField]]: payload
      }
      state.current = payload
    },
    addItems (state, payload) {
      if (!Array.isArray(payload)) {
        throw new Error('the addItems mutation must receive an array')
      }
      payload.forEach(item => {
        state.ids.push(payload[idField])
        state.keyedById[idField] = item
      })
    },
    removeData (state, id) {
      state.data = state.data.filter(item => item[service.id] !== id)
      if (state.current[service.id] === id) {
        state.current = undefined
      }
    },
    updateData (state, payload) {

    },
    clearData (state) {
      state.ids = []
      state.current = undefined
      state.keyedById = {}
    },
    setCurrent (state, payload) { state.current = payload },
    clearCurrent (state) { state.current = undefined }
  }
}

export function mapActions (service) {
  return {
    find () {},
    get () {},
    create ({state, commit, rootState}, data) {
      service.create(data)
        .then(data => {
          commit('addItem', data)
        })
    },
    update () {},
    patch () {},
    remove () {}
  }
}

export function mapGetters (service) {
  return {
    data (state) {
      return Object.keys(state.keyedById).map(key => state.keyedById[key])
    }
  }
}
