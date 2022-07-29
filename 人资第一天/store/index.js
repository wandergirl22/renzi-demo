import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局模块
  state: {
    count: 97777,
    username: 'jack',
    age: 18
  },
  // 派生数据
  // 相当于计算属性
  // 基于 state 里的数据生成新的数据
  getters: {
    // 定义的时候函数形式
    // 使用的时候属性形式
    formatCount(state) {
      return (state.count / 10000).toFixed(2) + '万'
    },
    token(state) {
      return state.user.token
    },
    title(state) {
      return state.setting.title
    }
  },
  mutations: {
    // 同步操作
    // 唯一修改state的方法
    // mutations里的函数接收的第一个参数一定是state
    // 第二个是传递过来的参数
    // 第三个是$event的第一个对象
    addCount(state, payload) {
      state.count += payload
    }
  },
  actions: {
    // 只能执行异步操作，不能修改state 数据
    // mutations里的函数接收的第一个形参都是 context 上下文
    // asyncAddCount(context) {
    //   setTimeout(() => {
    //     context.commit('addCount', 10)
    //     console.log(context)
    //   }, 1000)
    // }
    // 解构 context 对象里的commit
    // commit() dispatch()
    // rootState{} rootGetters{} getters{} state{}
    asyncAddCount({ commit }) {
      setTimeout(() => {
        commit('addCount', 10)
      }, 1000)
    }
  },
  // 进行模块划分
  modules: {
    // 对user模块进行管理
    user,
    setting
  },
  // 插件
  // 自动持久化存储
  // plugins:[createVuexPersisted()],
  plugins: [
    createVuexPersisted({
      reducer(state) {
        // 指定存储某个模块的数据
        return {
          user: state.user
        }
      }
    })
  ]
})
