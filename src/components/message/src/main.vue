<template lang="pug">
  transition(name="message-fade")
    .q-message(
      :class="classes"
      :style="{ top: `${top}px` }"
      v-show="visible"
    )
      span.q-message__content {{ message }}
</template>

<script>
// import { oneOf } from '../../../script/util'

export default {
  name: 'q-message',

  data () {
    return {
      duration: 0,
      message: '',
      top: 0,
      types: '',
      visible: false
    }
  },

  // props: {
  //   type: {
  //     type: String,
  //     default: 'primary',
  //     validator (value) {
  //       return oneOf(value, ['primary', 'success', 'warning', 'error'])
  //     }
  //   }
  // },

  computed: {
    classes () {
      const prefix = 'q-message'

      return {
        [`${prefix}--${this.type}`]: !!this.type
      }
    }
  }

  // TODO: destroy

  // TODO: close

}
</script>

<style lang="stylus">
  .q-message
    padding 12px 22px 12px 42px
    display inline-block
    position fixed
    top 24px
    left 50%
    max-width 620px
    z-index 999
    font-size 14px
    line-height 1.4
    background-color #fff
    transform translateX(-50%)
    border-radius 4px
    box-shadow 0 5px 22px rgba(0,0,0,0.16)
    // border-left 4px solid #3DA8F5

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

  .message-fade-enter-active, .message-fade-leave-active
    transition .4s
  .message-fade-enter, .message-fade-leave-active
    opacity 0
    transform translate(-50%, -100%)
</style>
