<template>
  <!-- 前缀+变量 -->
  <button @click="handleClick" :class="this.btnClasses.join('')">
    <!-- {{ this.$slots.defaults }} -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'packButton',
  props: {
    // type来定义button的类型
    type: {
      type: String,
      default: 'default',
      validate(val) {
        return [
          'primary',
          'success',
          'normal',
          'warning',
          'error',
          'default'
        ].includes(val)
      }
    },
    // button按钮大小
    size: {
      type: String,
      default: 'middle',
      validate(val) {
        return ['large', 'middle', 'small', 'mini'].includes(val)
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    btnClasses() {
      return [
        this.type ? 'ice-button--' + this.type : '',
        'button_init',
        this.size
      ]
    }
  },
  // render() {},
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style scoped lang="less">
/* 按钮初始样式 */
.button_init {
  display: inline-block;
  margin-left: 8px;
  border-radius: 2px;
}

/* 按钮大小 */
.large {
  padding: 12px 20px;
  font-size: 14px;
}
.middle {
  padding: 12px 20px;
  font-size: 14px;
}
.small {
  padding: 9px 15px;
  font-size: 12px;
}
.mini {
  padding: 7px 15px;
  font-size: 12px;
}

/* 主要按钮 */
.ice-button--primary {
  background: #1349c5;
  border: 1px solid #1349c5;
  color: #ffffff;
  /* 划过样式 */
  &:hover {
    background: #4a76dd;
    cursor: pointer;
  }
}

/* 普通按钮 */
.ice-button--normal {
  background: #ffffff;
  border: 1px solid #dee2ee;
  color: #4d5158;
  &:hover {
    background: #4090ff;
    cursor: pointer;
    color: #ffffff;
  }
}

/* 警告按钮 */
.ice-button--warning {
  background: #f5f0dc;
  border: 1px solid #ff9f23;
  font-weight: bold;
  color: #ff9f23;
  &:hover {
    background: #ff9f23;
    cursor: pointer;
    color: #ffffff;
  }
}

/* 成功按钮 */
.ice-button--success {
  background: #02d1a6;
  border: 1px solid #02d1a6;
  color: #ffffff;
  &:hover {
    background: #63dac2;
    cursor: pointer;
    color: #ffffff;
  }
}

/* 错误按钮 */
.ice-button--error {
  background: #f76359;
  border: 1px solid #f76359;
  color: #ffffff;
  &:hover {
    background: #f58881;
    cursor: pointer;
    color: #ffffff;
  }
}

/* 默认按钮 */
.ice-button--default {
  background: #4090ff;
  border: 1px solid #4090ff;
  color: #ffffff;
  &:hover {
    background: #69a6fc;
    cursor: pointer;
    color: #ffffff;
  }
}
</style>
