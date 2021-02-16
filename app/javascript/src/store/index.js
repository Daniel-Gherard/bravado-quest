import {
  contactsActions
} from './actions'

import {
  contactsGetters
} from './getters'

import {
  contactsMutations
} from './mutations'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contactsModule = {
  state: {
    contacts: []
  },
  actions: contactsActions,
  mutations: contactsMutations,
  getters: contactsGetters,
  namespaced: true
}

export default new Vuex.Store({
  modules: {
    contacts: contactsModule
  }
})
