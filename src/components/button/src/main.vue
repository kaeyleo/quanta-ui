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
    round: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
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
        [`${prefix}--${this.color}`]: !!this.color,
        [`${prefix}--round`]: this.round,
        [`disabled`]: this.disabled
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

  /**
   * Button Variables
   */

  $btn-plain-color = #696A6B
  $btn-plain-border = #D8DADF
  $btn-plain-bg = #fff
  $btn-plain-border-hover = darken($btn-plain-border, 8)
  $btn-plain-bg-hover = darken($btn-plain-bg, 3)

  $btn-info-color = #818B92
  $btn-primary-color = #1194F6
  $btn-success-color = #64C061
  $btn-warning-color = #FFB844
  $btn-error-color = #EE5660

  /**
   * Button Style
   */

  button-status(color)
    background-color color
    border-color color

  .q-button,
  .q-button:active,
  .q-button:focus
    outline 0

  .q-button
    margin 0
    padding 10px 16px
    display inline-block
    font-size 14px
    font-weight 500
    color #fff
    line-height 1
    white-space nowrap
    border 1px solid $btn-plain-border
    background-color $btn-plain-bg
    border-radius 3px
    cursor pointer
    outline 0
    user-select none
    -webkit-appearance none
    text-decoration none
    transition all .2s
    &:not(.q-button--plain):hover
      opacity .8
    &.disabled
      cursor not-allowed
      opacity .5
      &:hover
        opacity .5
      &.q-button--plain
        border-color $btn-plain-border
        background-color $btn-plain-bg

  // Size
  .q-button--large
    padding 11px 24px
    font-size 15px
  .q-button--small
    padding 8px 10px

  // Style
  .q-button--round
    border-radius 20px

  // Color
  .q-button--plain
    color $btn-plain-color
    &:hover
      border-color $btn-plain-border-hover
      background-color $btn-plain-bg-hover
  .q-button--info, .q-button--info:hover
    button-status($btn-info-color)
  .q-button--primary, .q-button--primary:hover
    button-status($btn-primary-color)
  .q-button--success, .q-button--success:hover
    button-status($btn-success-color)
  .q-button--warning, .q-button--warning:hover
    button-status($btn-warning-color)
  .q-button--error, .q-button--error:hover
    button-status($btn-error-color)
</style>
