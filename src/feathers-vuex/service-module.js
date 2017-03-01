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
          currentId: undefined
        },
        mutations: mapMutations(service),
        actions: mapActions(service),
        getters: mapGetters(service)
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
      let id = payload[idField]
      state.ids.push(id)
      state.keyedById = {
        ...state.keyedById,
        [id]: payload
      }
    },
    removeData (state, id) {
      state.data = state.data.filter(item => item[service.id] !== id)
      if (state.currentId === id) {
        state.currentId = undefined
      }
    },
    updateItem (state, payload) {
      let id = payload[idField]
      state.keyedById[id] = payload
    },
    clearData (state) {
      state.ids = []
      state.currentId = undefined
      state.keyedById = {}
    },
    setCurrentId (state, payload) {
      debugger
      let id = payload[idField] || payload
      state.currentId = id
    },
    clearCurrentId (state) { state.currentId = undefined }
  }
}

export function mapActions (service) {
  const { vuexOptions } = service
  const idField = vuexOptions.module.idField || vuexOptions.global.idField
  return {
    find ({ dispatch }, params) {
      service.find(params)
        .then(response => {
          let data = response.data || response
          data.map(item => dispatch('addOrUpdate', item))
        })
    },

    get ({ commit, dispatch }, params) {
      let id
      if (typeof params === 'string' || typeof params === 'number') {
        id = params[idField]
        delete params[idField]
      } else {
        id = params
        params = undefined
      }
      service.get(id, params)
        .then(item => {
          dispatch('addOrUpdate', item)
          commit('setCurrentId', item)
        })
    },

    create ({ commit, dispatch }, data) {
      service.create(data)
        .then(item => {
          dispatch('addOrUpdate', item)
          commit('setCurrentId', item)
        })
    },

    update ({ dispatch }, id, data) {
      console.log(id)
      debugger
      console.log(data)
    },

    patch () {},
    remove () {},

    addOrUpdate ({ state, commit }, item) {
      let id = item[idField]
      let existing = state.keyedById[id]
      existing ? commit('updateItem', item) : commit('addItem', item)
    }
  }
}

export function mapGetters (service) {
  return {
    data (state) {
      return Object.keys(state.keyedById).map(key => state.keyedById[key])
    },
    current (state) {
      return state.currentId ? state.keyedById[state.currentId] : null
    }
  }
}
