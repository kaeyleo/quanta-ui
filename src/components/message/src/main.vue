<template lang="pug">
  .q-message__wrapper
    .q-message(
      :class="classes"
    )
      span.q-message__content
        slot
</template>

<script>
import { oneOf } from '../../../script/util'

export default {
  name: 'q-message',

  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return oneOf(value, ['primary', 'success', 'warning', 'error'])
      }
    }
  },

  computed: {
    classes () {
      const prefix = 'q-message'

      return {
        [`${prefix}--${this.type}`]: !!this.type
      }
    }
  }
}
</script>

<style lang="stylus">
  .q-message
    display inline-block
    padding 12px 22px 12px 42px
    max-width 620px
    font-size 14px
    line-height 1.4
    background-color #fff
    border-radius 4px
    box-shadow 0 5px 22px rgba(0,0,0,0.16)
    // border-left 4px solid #3DA8F5
    // &__wrapper
    &__content
      position relative
      &:before
        content ''
        position absolute
        display block
        top 1px
        left -24px
        width 15px
        height 15px
        border-radius 50%
    &--primary .q-message__content:before
      background-color #3DA8F5
    &--success .q-message__content:before
      background-color #64C061
    &--warning .q-message__content:before
      background-color #FFB844
    &--error .q-message__content:before
      background-color #EE5660
</style>
