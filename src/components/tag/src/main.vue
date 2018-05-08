<template lang="pug">
  span.q-tag(
    :class="classes"
  )
    slot
</template>

<script>
export default {
  name: 'q-tag',

  props: {
    round: {
      type: Boolean,
      default: false
    },
    hollow: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    }
  },

  computed: {
    classes () {
      const prefix = 'q-tag'

      return {
        [`${prefix}--round`]: this.round,
        [`${prefix}--hollow`]: this.hollow,
        [`${prefix}--${this.color}`]: !!this.color
      }
    }
  }
}
</script>

<style lang="stylus">
  .q-tag
    display inline-block
    padding 0 10px
    height 26px
    line-height 28px
    font-size 14px
    color #696a6b
    border-radius 2px
    box-sizing border-box
    background-color #F3F3F3
    transition .2s
    white-space nowrap
    word-break keep-all
    a
      color inherit
      text-decoration none
    &:hover
      background-color #E5E5E5
    &--round
      border-radius 20px
    &--hollow
      padding 0 8px
      line-height 26px
      background-color #fafafa
      border 1px solid #d9d9d9
    &--blue
      color #2D98FF
      background-color #E6F2FF
      &:hover
        background-color darken(#E6F2FF, 5%)
    &--green
      color #51BA4D
      background-color #E6F5E6
      &:hover
        background-color darken(#E6F5E6, 5%)
    &--gold
      color #FFA616
      background-color #FFF4DC
      &:hover
        background-color darken(#FFF4DC, 5%)
    &--red
      color #FF6E77
      background-color #FFE6E6
      &:hover
        background-color darken(#FFE6E6, 5%)
    &--purple
      color #8878F9
      background-color #ECE9FF
      &:hover
        background-color darken(#ECE9FF, 5%)
</style>
