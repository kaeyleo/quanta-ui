<template lang="pug">
  .tooltip-example
    h2 Tooltip 提示
    h3 基础用法
    p 文字提示框
    .component-example
      div
        q-tooltip.tooltip-demo(content="Tooltip text")
          q-button Tooptip
</template>

<script>
export default {
  name: 'tooltip-example'
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .tooltip-demo
    & + .tooltip-demo
      margin-left 200px
</style>
