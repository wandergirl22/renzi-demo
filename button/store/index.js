import Vue from 'vue'
import Vuex from 'vuex'

import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},

  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [createVuexPersisted()]
})
