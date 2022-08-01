<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
// mapState, mapMutations, mapActions, mapGetters,

import { createNamespacedHelpers } from 'vuex'
const { mapActions: mapColorActions } = createNamespacedHelpers('color')

export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created() {},

  methods: {
    changeColor() {
      const setColor = function () {
        const str = '0123456789abcdef'
        let colorStr = '#'
        for (let i = 1; i <= 6; i++) {
          colorStr += str[parseInt(Math.random() * str.length)]
        }
        return colorStr
      }
      this.asyncChangeColorFn(setColor())
    },
    ...mapColorActions(['asyncChangeColorFn'])
  }
}
</script>

<style scoped>
button {
  width: 100px;
  height: 50px;
}
</style>
