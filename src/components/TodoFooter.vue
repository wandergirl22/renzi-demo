<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值</strong></span>
    <ul class="filters">
      <li>
        <a class="selected" href="javascript:;" @click="selectAll">全部</a>
      </li>
      <li>
        <a href="javascript:;" @click="unfinished">未完成</a>
      </li>
      <li>
        <a href="javascript:;" @click="done">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearAll">清除已完成</button>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    selectAll() {},
    unfinished() {},
    done() {},
    clearAll() {}
  }
}
</script>
