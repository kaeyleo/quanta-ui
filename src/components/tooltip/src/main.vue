<template lang="pug">
  .q-tooltip
    .q-tooltip__trigger
      slot
    .q-tooltip__popper
      span {{ content }}
</template>

<script>
export default {
  name: 'q-tooltip',

  props: {
    content: String
  }
}
</script>

<style lang="stylus">
  .q-tooltip
    position relative
    display inline-block
    &__trigger
      &:hover
        & + .q-tooltip__popper
          opacity 1
    &__popper
      position absolute
      padding 6px 12px
      bottom calc(100% + 12px)
      left 50%
      transform translateX(-50%)
      font-size 14px
      color #fff
      text-align center
      white-space nowrap
      background-color #333
      border-radius 3px
      opacity 0
      transition opacity .4s
      &:before
        position absolute
        bottom -11px
        left 50%
        margin-left -6px
        content ''
        display block
        width 0
        height 0
        border 6px solid #333
        border-left-color transparent
        border-bottom-color transparent
        border-right-color transparent
</style>
