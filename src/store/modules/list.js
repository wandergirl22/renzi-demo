export default {
  namespaced: true,
  state: {
    data: [
      { name: '吃饭', done: false, id: 1 },
      { name: '睡觉', done: false, id: 2 },
      { name: '打豆豆', done: false, id: 3 }
    ]
  },
  getters: {},
  mutations: {
    delListFn(state, payload) {
      state.data = state.data.filter((item) => item.id !== payload)
    },
    addListFn(state, payload) {
      state.data.unshift({
        name: payload,
        done: false,
        id: state.data.length + 1
      })
    }
  },
  actions: {
    asyncDelListFn(context, payload) {
      context.commit('delListFn', payload)
    },
    asyncAddListFn(context, payload) {
      context.commit('addListFn', payload)
    }
  }
}
