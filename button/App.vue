<template>
  <div>
    <div class="home">我是首页</div>
    <packButton type="primary" size="middle" @click="handle1">按钮1</packButton>
    <packButton type="success" size="small" @click="handle2">按钮2</packButton>
    <packButton type="warning" size="mini" @click="handle3">按钮3</packButton>
    <packButton type="normal" @click="handle4">按钮4</packButton>
    <packButton type="error" disabled>按钮4</packButton>
  </div>
</template>
<script>
import packButton from '@/components/packButton'
export default {
  name: 'homeApp',
  components: {
    packButton
  },
  methods: {
    handle1(e) {
      console.log('点击按钮1:', e)
    },
    handle2(e) {
      console.log('点击按钮2:', e)
    },
    handle3(e) {
      console.log('点击按钮3:', e)
    },
    handle4(e) {
      console.log('点击按钮4:', e)
    }
  }
}
</script>
