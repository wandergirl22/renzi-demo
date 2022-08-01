export default {
  namespaced: true,
  state: {
    col: ''
  },
  getters: {},
  mutations: {
    changeColorFn(state, payload) {
      state.col = payload
    }
  },
  actions: {
    asyncChangeColorFn(context, payload) {
      context.commit('changeColorFn', payload)
    }
  }
}
