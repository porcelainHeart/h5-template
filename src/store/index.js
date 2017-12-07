import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  foo: 1,
}

const store = new Vuex.store({
  state,
  actions,
  getters,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
})
