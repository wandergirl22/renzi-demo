<template>
  <div>
    {{ $store.state.count }}
    {{ count }}
    {{ username }}
    {{ age }}
    <!-- 不推荐 -->
    <!-- $store.state -->
    <button @click="$store.state.count++">自增1</button>
    <!-- $store.commit() -->
    <button @click="$store.commit('addCount', 5)">自增5</button>
    <button @click="clickHandler">自增3</button>
    <button @click="addCount(6)">自增6</button>
    <!-- 显示更清晰的数据 -->
    {{ $store.getters.formatCount }}
    {{ formatCount }}
    <!-- 模块化管理 -->
    {{ $store.state.user.token }}
    {{ $store.state.setting.title }}
    {{ token }}
    {{ title }}
    <button @click="UpdateTitle">修改标题</button>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapActions,
  mapGetters,
  createNamespacedHelpers
} from 'vuex'
const { mapMutations: mapSettingMutations } = createNamespacedHelpers('setting')

export default {
  data() {
    return {}
  },
  // 本质上是一个函数
  // 可以将vuex中的数据映射为计算属性
  // 返回值是一个对象
  // computed: mapState(['count', 'username']),
  computed: {
    // count() {
    //   return this.$store.state.count
    // }
    // vuex 映射的计算属性
    ...mapState(['count', 'username']),
    // 本组件自己的计算属性
    age() {
      return this.$store.state.age
    },
    ...mapGetters(['formatCount']),
    ...mapGetters(['token', 'title'])
  },
  created() {},

  methods: {
    clickHandler() {
      // this.$store.commit('addCount', 3)
      // this.addCount(3)
      // this.$store.dispatch('actions', payload)
      this.$store.dispatch('asyncAddCount', 3)
    },
    ...mapMutations(['addCount']),
    ...mapActions(['asyncAddCount']),
    UpdateTitle() {
      // this.$store.commit('updateTitle', '新标题')
      // this.$store.commit('setting/updateTitle', '新标题')
      // this.setting/updateTitle
      // /前面为undefined
      // /后面会被识别成变量
      // obj['fn']()
      // this['setting/updateTitle']('新标题')
      this.updateTitle('新标题')
    },
    ...mapMutations(['setting/updateTitle']),
    ...mapMutations('setting', ['updateTitle']),
    ...mapSettingMutations(['updateTitle'])
  }
}
</script>

<style scoped lang="less">
button {
  border: 1px solid #000;
  background-color: #fff;
}
</style>
