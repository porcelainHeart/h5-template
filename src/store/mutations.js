import * as types from './mutation-types'

const mutations = {
  [types.EXAMPLE_MUTATION] (state, payload) {
    state.foo += payload
  },
}

export default mutations
