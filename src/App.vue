<template>
  <div>
    <Progress :width="300" :progress="20" :round="false" />
    <Progress :progress="80" color="purple" />
  </div>
</template>

<script>
import Progress from '@/components/packProgress.vue'
export default {
  data() {
    return {}
  },

  components: {
    Progress
  },
  created() {},

  methods: {}
}
</script>

<style scoped></style>
