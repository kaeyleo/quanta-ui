<template lang="pug">
  .callout-example
    h2 Callout 提示面板
    h3 基础用法
    p 提供标题、段落和高亮颜色
    .component-example
      div
        q-callout.callout-demo(title="Primary") This is a primary callout.
        q-callout.callout-demo(title="Info" type="info") This is an info callout.
        q-callout.callout-demo(title="Warning" type="warning") This is a warning callout.
        q-callout.callout-demo(title="Error" type="error") This is a error callout.

    h3 轻量的提示面板
    p 添加 light 属性，获得紧凑的布局和更浅的色调，适用于极简的UI设计和不重要的内容提示
    .component-example
      div
        q-callout.callout-demo(title="Primary" light) This is a primary callout.
        q-callout.callout-demo(title="Info" type="info" light) This is an info callout.
        q-callout.callout-demo(title="Warning" type="warning" light) This is a warning callout.
        q-callout.callout-demo(title="Error" type="error" light) This is a error callout.
</template>

<script>
export default {
  name: 'callout-example'
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .callout-demo
    margin-bottom 16px
    &:last-of-type
      margin-bottom 0
</style>
