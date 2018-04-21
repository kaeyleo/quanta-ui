<template lang="pug">
  header.q-header__wrapper(
    :style="{ backgroundColor: backgroundColor || '' }"
  )
    .q-header
      .q-header__title.left
        h1.q-header__title-text(v-if="typeof title === 'string'") {{ title }}
        h1.q-header__title-text(v-if="title.type === 'text'") {{ title.value }}
        img.q-header__title-logo(v-if="title.type === 'logo'" :src="title.value")
      .q-header__menu.left
        ul.q-menu.clearfix
          li.q-menu-item 首页
          li.q-menu-item.is-active 设计
          li.q-menu-item 开发
          li.q-menu-item.is-disabled 探索
          li.q-menu-item 活动
      .q-header__actions.right
        ul.q-menu.clearfix
          li.q-menu-item 登录
          li.q-menu-item 注册

</template>

<script>
export default {
  name: 'q-header',
  props: {
    title: {
      type: [String, Object],
      default: ''
    },
    backgroundColor: String,
    textColor: String
  },

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

  .left
    float left
  .right
    float right
  .clearfix::after
    content ''
    display table
    clear both

  // container
  .q-header__wrapper
    width 100%
    background-color #fff
  .q-header
    padding 0 16px
    margin 0 auto
    // max-width 1152px
    height 60px
    .q-menu
      line-height 60px

  // header title
  .q-header__title
    font-size 0
    text-align left
    .q-header__title-text
      display inline-block
      font-size 22px
      font-weight 400
      color #333
      line-height 60px
    .q-header__title-logo
      margin 14px 0
      height 32px
      pointer-events none

  // header menu
  $color-default = #333
  .q-header__menu
    margin-left 32px

  // header actions
  .q-header__actions
    .q-menu
      padding 0 12px
    .q-menu-item
      padding 0 12px

  // menu
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
