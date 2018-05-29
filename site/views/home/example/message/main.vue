<template lang="pug">
  .message-example
    h2 Message 消息
    h3 基础用法
    p 轻量的全局提示，为用户提供快速反馈
    .component-example
      div
        q-button.message-demo(@click="showMessage('primary')") Primary
        q-button.message-demo(@click="showMessage('success')") Success
        q-button.message-demo(@click="showMessage('warning')") Warning
        q-button.message-demo(@click="showMessage('error')") Error
</template>

<script>
export default {
  name: 'message-example',

  methods: {
    showMessage (type) {
      this.$message({
        message: `This is a '${type}' message`,
        type
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .message-demo
    margin-right 8px
</style>
