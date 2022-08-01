<template>
  <div class="m-progress" :style="`width:${width}px;`">
    <div class="m-progress-outer">
      <div :class="`m-progress-inner ${round ? 'round' : ''}`">
        <div
          :class="`u-progress-bg ${round ? 'round' : ''}`"
          :style="`width: ${progress}%;backgroundColor:${color};`"
        ></div>
      </div>
    </div>
    <span class="u-progress-text">{{ progress }}%</span>
  </div>
</template>
<script>
export default {
  name: 'packProgress',
  props: {
    width: {
      type: Number,
      default: 600
    },
    progress: {
      type: Number,
      default: 36
    },
    color: {
      type: String,
      default: 'skyblue'
    },
    round: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less" scoped>
.m-progress {
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  line-height: 24px;
  margin: 30px auto;
  .round {
    border-radius: 50px;
  }
  .m-progress-outer {
    display: inline-block;
    width: calc(100%);
    .m-progress-inner {
      width: 100%;
      background-color: #f5f5f5;
      .u-progress-bg {
        height: 20px;
        transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
      }
    }
  }
  .u-progress-text {
    margin-left: 10px;
    width: 50px;
    color: rgba(0, 0, 0, 0.45);
    text-align: left;
    vertical-align: middle;
  }
}
</style>
