<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="(item, index) in data"
      :key="index"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.done" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from 'vuex'
const { mapActions: mapListActions } = createNamespacedHelpers('list')

export default {
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    del(index) {
      this.asyncDelListFn(index)
    },
    ...mapListActions(['asyncDelListFn'])
  }
}
</script>
