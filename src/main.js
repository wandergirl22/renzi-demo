import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// import './plugins/element.js'
// Vue.use(ElementUI)

// 可以传函数或对象
// Vue.use({
//   // 钩子函数
//   install() {}
// })
// Vue.use(() => {})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
