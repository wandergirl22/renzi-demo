export default {
  // 局部模块
  // 开启命名空间
  // 不能通过全局模块调用
  namespaced: true,
  state: {
    title: '标题'
  },
  getters: {},
  mutations: {
    updateTitle(state, payload) {
      state.title = payload
    }
  },
  actions: {}
}
