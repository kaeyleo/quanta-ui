<template lang="pug">
  button.q-button(
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
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
    ripple: {
      type: Boolean,
      default: false
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
  },

  methods: {
    handleClick (e) {
      this.ripple && this.createRipple(e)
      this.$emit('click', e)
    },

    createRipple (e) {
      const parent = this.$el
      const circle = document.createElement('div')
      parent.appendChild(circle)

      const parentWidth = parent.clientWidth
      const parentHeight = parent.clientHeight

      const dia = Math.max(parentWidth, parentHeight)
      const left = e.pageX - parent.offsetLeft - dia / 2
      const top = e.pageY - parent.offsetTop - dia / 2

      circle.style.width = `${dia}px`
      circle.style.height = `${dia}px`
      circle.style.left = `${left}px`
      circle.style.top = `${top}px`

      circle.classList.add('q-button--ripple')

      setTimeout(() => {
        parent.removeChild(circle)
      }, 600)
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
    &:active
      background-color darken(color, 12)
      border-color darken(color, 12)

  .q-button,
  .q-button:active,
  .q-button:focus
    outline 0

  .q-button
    position relative
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
    overflow hidden
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
    .q-button--ripple
      background-color rgba(0,0,0,.06)

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

  // ripple
  .q-button--ripple
    position absolute
    border-radius 50%
    background-color rgba(255,255,255,.26)
    transform scale(0)
    animation rippleDrop .6s linear

  @keyframes rippleDrop {
    50% {
      transform scale(2)
      opacity 1
    }
    100% {
      transform scale(2)
      opacity 0
    }
  }
</style>
