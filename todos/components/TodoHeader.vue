<template>
  <header class="header">
    <h1 :style="{ color: col }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="content"
      @change="confirm"
    />
  </header>
</template>

<script>
// import { mapState, mapMutations, mapActions, mapGetters, createNamespacedHelpers
// } from 'vuex'

import { mapGetters, createNamespacedHelpers } from 'vuex'
const { mapActions: mapListActions } = createNamespacedHelpers('list')

export default {
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['col'])
  },
  methods: {
    confirm() {
      this.asyncAddListFn(this.content)
      this.content = ''
    },
    ...mapListActions(['asyncAddListFn'])
  }
}
</script>
