<template lang="pug">
  .alert-example
    h2 Alert 警告
    h3 基础用法
    p 用于展示警告信息，内容尽可能简短精炼
    .component-example
      div
        q-alert.alert-demo This is a message.
        q-alert.alert-demo(type="info") This is a informations.
        q-alert.alert-demo(type="success") This is a successful message.
        q-alert.alert-demo(type="warning") This is a warning notice.
        q-alert.alert-demo(type="error") This is an error message.
    h3 可关闭的警告
    p 添加 closable 属性，将会显示关闭按钮，点击可关闭警告
    .component-example
      div
        q-alert.alert-demo(closable) This is a message.
        q-alert.alert-demo(type="success" closable) This is a successful message.
    h3 自定义关闭事件
    p 绑定 on-close 事件，在关闭时触发
    .component-example
      div
        q-alert.alert-demo(
          @on-close="closeAlert"
          closable
        ) This is a message.
</template>

<script>
export default {
  name: 'alert-example',

  methods: {
    closeAlert () {
      alert('Bye bye Alert!')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .alert-demo
    width 320px
    margin-bottom 16px
    &:last-of-type
      margin-bottom 0
</style>
