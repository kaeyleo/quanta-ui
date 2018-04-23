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
        q-menu
          q-menu-item(index="1" title="首页")
          q-menu-item(index="2" title="设计")
          q-menu-item(index="3" title="开发" disabled)
          q-menu-item(index="4" title="探索")
      .q-header__menu.right
        q-menu
          q-menu-item(index="1" title="登录")
          q-menu-item(index="2" title="注册")
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
    line-height 60px
    &.left
      margin-left 32px
    &.right
      padding 0 12px
      .q-menu
        padding 0 12px
      .q-menu-item
        padding 0 12px

  // menu
</style>
