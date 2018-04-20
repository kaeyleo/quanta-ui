<template lang="pug">
  header.q-header__wrapper
    .q-header
      .q-header__title
        h1.q-header__title-text 项目管理系统
        //- img.q-header__title-logo(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PpdMWriUtBV7W7nvWoEQ_GQwYKb9LAOeVuNGcOkaYK0EZnXyYg")
      .q-header__menu
        ul.q-menu.clearfix
          li.q-menu-item 首页
          li.q-menu-item.is-active 设计
          li.q-menu-item 开发
          li.q-menu-item.is-disabled 探索
          li.q-menu-item 活动
</template>

<script>
export default {
  name: 'q-header',
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
  // base
  h1
    margin 0
  ul
    padding 0
    margin 0
    li
      list-style-type none

  .clearfix::after
    content ''
    display table
    clear both

  // container
  .q-header__wrapper
    width 100%
    background-color #fff
    border-bottom 1px solid #e8e8e8
  .q-header
    padding 0 16px
    margin 0 auto
    display flex
    align-items center
    max-width 1152px
    height 66px
    box-sizing border-box

  // common
  .q-header__title,
  .q-header__menu
    float left

  // title
  .q-header__title
    font-size 0
    text-align left
    .q-header__title-text
      display inline-block
      font-size 22px
      font-weight 400
      color #333
    .q-header__title-logo
      height 32px
      pointer-events none

  // menu
  $color-default = #333
  .q-header__menu
    margin-left 32px
  .q-menu
    display block
    padding 0 16px
  .q-menu-item
    padding 6px 16px
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
