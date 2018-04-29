<template lang="pug">
  transition(name="close")
    .q-alert(
      v-if="isShow"
      :class="classes"
    )
      .q-alert__desc
        slot
      span.q-alert__close(
        v-show="closable"
        @click="close"
      ) close
</template>

<script>
import { oneOf } from '../../../script/util'

export default {
  name: 'q-alert',

  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return oneOf(value, ['primary', 'info', 'success', 'warning', 'error'])
      }
    },
    closable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isShow: true
    }
  },

  computed: {
    classes () {
      const prefix = 'q-alert'

      return {
        [`${prefix}--${this.type}`]: !!this.type
      }
    }
  },

  methods: {
    close (e) {
      this.isShow = false
      this.$emit('on-close', e) // 关闭时触发
    }
  }
}
</script>

<style lang="stylus">
  .q-alert
    position relative
    padding 8px 66px 8px 16px
    color #666
    border 1px solid
    border-radius 3px
  .q-alert__desc
    font-size 15px
    line-height 1.4

  alert-type(borderColor, bgColor)
    border-color borderColor
    background-color bgColor
    .q-alert__close
      color darken(borderColor, 16%)
      &:hover
        color darken(borderColor, 40%)

  .q-alert--primary
    alert-type(#9ACEFF, #E3F3FF)
  .q-alert--info
    alert-type(#CDD5DB, #F2F4F7)
  .q-alert--success
    alert-type(#AFE0AD, #EAFCEA)
  .q-alert--warning
    alert-type(#FFD48E, #FFF5E2)
  .q-alert--error
    alert-type(#FFC0C5, #FFEFF0)

  .q-alert__close
    position absolute
    top 8px
    right 16px
    cursor pointer
    transition color .2s

  .close-enter-active, .close-leave-active
    transition opacity .3s
  .close-enter, .close-leave-to
    opacity 0
</style>
