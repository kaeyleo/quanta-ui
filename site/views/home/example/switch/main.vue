<template lang="pug">
  .switch-example
    h2 Switch 开关
    h3 基础用法
    p 用于表示两种状态之间的切换
    .component-example
      div
        q-switch

    q-callout.callout 与 checkbox 不同的是：switch 会直接触发状态改变，而 checkbox 则用于标记状态，需要配合表单提交等操作。

    h3 自定义颜色
    p 添加 color 属性，设置打开时的背景颜色
    .component-example
      div
        q-switch.switch-demo(:value="true" color="#FC7F99")
        q-switch.switch-demo(:value="true" color="#5D88F0")
        q-switch.switch-demo(:value="true" color="#FF98C0")
        q-switch.switch-demo(:value="true" color="#917DDE")
        q-switch.switch-demo(:value="true" color="#63DA9B")
        q-switch.switch-demo(:value="true" color="#808AB2")
        q-switch.switch-demo(:value="true" color="#FF9E59")
        q-switch.switch-demo(:value="true" color="#FFD15E")

    h3 禁用状态
    .component-example
      div
        q-switch.switch-demo(:value="true" disabled)
        q-switch.switch-demo(disabled)
</template>

<script>
export default {
  name: 'switch-example'
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .switch-demo
    & + .switch-demo
      margin-left 16px

  .callout
    margin-bottom 40px
</style>
