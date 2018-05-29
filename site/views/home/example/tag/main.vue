<template lang="pug">
  .tag-example
    h2 Tag 标签
    h3 基础用法
    p 用以标记和分类
    .component-example
      div
        q-tag.tag-demo Tag
        q-tag.tag-demo 标签
        q-tag.tag-demo
          router-link(to="/guide") Hyperlink
        q-tag.tag-demo(round) Round
        q-tag.tag-demo(hollow) Hollow
    h3 彩色标签
    p 添加 color 属性，让标签多姿多彩
    .component-example
      div
        q-tag.tag-demo(color="blue") Blue
        q-tag.tag-demo(color="green") Green
        q-tag.tag-demo(color="gold") Gold
        q-tag.tag-demo(color="red") Red
        q-tag.tag-demo(color="purple") Purple
</template>

<script>
export default {
  name: 'tag-example'
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .tag-demo
    margin 4px 8px 4px 0
</style>
