import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { home },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: [],
      storage: window.sessionStorage
    })
  ]
})
