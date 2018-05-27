<template lang="pug">
  button.q-button(
    :class="classes"
    :disabled="disabled || loading"
    @click="handleClick"
  )
    span.q-button__text(
      v-if="$slots.default"
    )
      slot
</template>

<script>
import { oneOf } from 'src/script/util'

export default {
  name: 'q-button',

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
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
        [`${prefix}--loading`]: this.loading,
        [`${prefix}--text`]: this.text,
        [`${prefix}--${this.size}`]: !!this.size,
        [`${prefix}--${this.color}`]: !!this.color,
        [`${prefix}--round`]: this.round,
        [`${prefix}--long`]: this.long,
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

      const parentWidth = parent.clientWidth + 10
      const parentHeight = parent.clientHeight + 10

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
  $btn-border-radius--round = 20px
  $btn-plain-border-hover = darken($btn-plain-border, 8)
  $btn-plain-bg-hover = darken($btn-plain-bg, 3)

  $btn-gray-color = #818B92
  $btn-blue-color = #1194F6
  $btn-green-color = #64C061
  $btn-gold-color = #FFB844
  $btn-red-color = #EE5660

  $btn-group-border = rgba(#fff, .3)

  /**
   * Button Style
   */

  button-status(color)
    background-color color
    border-color color
    &:not(.disabled):active
      background-color darken(color, 12)
      border-color darken(color, 12)
    &.q-button--text
      color color
      background-color transparent
      border-color transparent
      &:not(.disabled):hover
        opacity 1
        background-color lighten(color, 90%)
      &:not(.disabled):active
        background-color lighten(color, 76%)
        border-color transparent
      &.disabled
        background-color lighten(color, 90%)
      .q-button--ripple
        background-color alpha(color, 0.16)

  button-size(size)
    if size == 'default'
      padding 10px 16px
      font-size 14px
    if size == 'small'
      padding 8px 10px
    if size == 'large'
      padding 11px 24px
      font-size 15px

  .q-button,
  .q-button:active,
  .q-button:focus
    outline 0

  .q-button
    position relative
    margin 0
    display inline-block
    button-size('default')
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

  .q-button__text
    transition all .3s

  .q-button--loading
    opacity .5
    pointer-events none
    &:before
      content ''
      position absolute
      top 50%
      left 50%
      margin-top -7px
      margin-left -7px
      width 12px
      height 12px
      border-radius 50%
      border 2px solid
      border-color #ffffff transparent transparent
      animation button-spin .8s linear
      animation-iteration-count infinite
    .q-button__text
      opacity 0

  @keyframes button-spin {
    100% {
      transform rotate(360deg)
    }
  }

  // Size
  .q-button--large
    button-size('large')
  .q-button--small
    button-size('small')

  // Style
  .q-button--round
    border-radius $btn-border-radius--round
  .q-button--long
    width 100%

  // Color
  .q-button--plain
    color $btn-plain-color
    &:hover
      border-color $btn-plain-border-hover
      background-color $btn-plain-bg-hover
    &:not(.disabled):active
      border-color darken($btn-plain-border-hover, 10%)
      background-color darken($btn-plain-bg-hover, 6%)
    &.disabled
      border-color $btn-plain-border
      background-color $btn-plain-bg
    &.q-button--loading:before
      border-color #888 transparent transparent
    &.q-button--text
      border-color transparent
      background-color transparent
      &:hover
        background-color lighten(#333, 90%)
      &:active
        background-color lighten(#333, 76%)
        border-color transparent
      &.disabled
        background-color lighten(#333, 90%)
      .q-button--ripple
        background-color alpha(#333, 0.16)
    .q-button--ripple
      background-color rgba(0,0,0,.06)

  .q-button--gray, .q-button--gray:hover
    button-status($btn-gray-color)
  .q-button--blue, .q-button--blue:hover
    button-status($btn-blue-color)
  .q-button--green, .q-button--green:hover
    button-status($btn-green-color)
  .q-button--gold, .q-button--gold:hover
    button-status($btn-gold-color)
  .q-button--red, .q-button--red:hover
    button-status($btn-red-color)

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

  // group
  .q-button-group
    display inline-block
    font-size 0
    &--round
      .q-button
        &:first-child
          border-top-left-radius $btn-border-radius--round
          border-bottom-left-radius $btn-border-radius--round
        &:last-child
          border-top-right-radius $btn-border-radius--round
          border-bottom-right-radius $btn-border-radius--round
    &--small
      .q-button
        button-size('small')
    &--large
      .q-button
        button-size('large')
    .q-button
      &:first-child
        border-top-right-radius 0
        border-bottom-right-radius 0
      &:last-child
        border-top-left-radius 0
        border-bottom-left-radius 0
      &:not(:last-child)
        margin-right -1px
      &:not(:first-child):not(:last-child)
        border-radius 0
      &--plain
        &:hover
          border-color $btn-plain-border
      &--gray, &--blue, &--green, &--gold, &--red
        &:first-child
          border-right-color $btn-group-border
        &:last-child
          border-left-color $btn-group-border
        &:not(:first-child):not(:last-child)
          border-left-color $btn-group-border
          border-right-color $btn-group-border
      &--round
        border-radius 0
      &--large, &--small
        button-size('default')
</style>
