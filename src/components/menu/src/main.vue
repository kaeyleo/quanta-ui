<template lang="pug">
  ul.q-menu.clearfix
    li.q-menu-item 首页
    li.q-menu-item.is-active 设计
    li.q-menu-item 开发
    li.q-menu-item.is-disabled 探索
    li.q-menu-item 活动
</template>

<script>
export default {
  name: 'q-menu'
}
</script>

<style lang="stylus">
  $color-default = #333

  .q-menu
    padding 0 16px
  .q-menu-item
    box-sizing border-box
    padding 0 16px
    float left
    font-size 16px
    color lighten($color-default, 30)
    cursor pointer
    transition .2s
    &:hover, &.is-active
      color lighten($color-default, 0)
    &.is-disabled
      color lighten($color-default, 56)
      cursor not-allowed
</style>
