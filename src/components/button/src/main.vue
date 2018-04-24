<template lang="pug">
  button.q-button(
    :class="classes"
  )
    span.q-button__text(
      v-if="$slots.default"
    )
      slot
</template>

<script>
import { oneOf } from '../../../script/util'

export default {
  name: 'q-button',

  props: {
    color: {
      type: String,
      default: 'plain'
    },
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['default', 'small', 'large'])
      }
    }
  },

  computed: {
    classes () {
      const prefix = 'q-button'

      return {
        [`${prefix}--${this.size}`]: !!this.size,
        [`${prefix}--${this.color}`]: !!this.color
      }
    }
  }
}
</script>

<style lang="stylus">
  [type=reset],
  [type=submit],
  button,
  html [type=button]
    -webkit-appearance button

  .q-button,
  .q-button:active,
  .q-button:focus
    outline 0

  $color=#696A6B
  $borderColor=#D8DADF
  $bgColor=#fff

  .q-button
    margin 0
    padding 10px 16px
    display inline-block
    font-size 14px
    font-weight 500
    color $color
    line-height 1
    white-space nowrap
    border 1px solid $borderColor
    background-color $bgColor
    border-radius 3px
    cursor pointer
    outline 0
    user-select none
    -webkit-appearance none
    text-decoration none
    transition all .2s
    &:not(.q-button--plain):hover
      opacity .8

  // Size
  .q-button--large
    padding 11px 24px
    font-size 15px
  .q-button--small
    padding 8px 10px

  // Color
  .q-button--plain
    &:hover
      border-color darken($borderColor, 8)
      background-color darken($bgColor, 3)
  .q-button--primary, .q-button--primary:hover
    color #fff
    background-color #1194F6
    border-color #1194F6
  .q-button--success, .q-button--success:hover
    color #fff
    background-color #64C061
    border-color #64C061
  .q-button--warning, .q-button--warning:hover
    color #fff
    background-color #FFB844
    border-color #FFB844
  .q-button--error, .q-button--error:hover
    color #fff
    background-color #EE5660
    border-color #EE5660
</style>
