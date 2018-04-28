<template lang="pug">
  .q-callout(
    :class="classes"
  )
    .q-callout__title(
      v-if="!!title"
      :style="{ marginBottom: !!$slots.default ? '3px' : '0' }"
    ) {{ title }}
    p.q-callout__content
      slot
</template>

<script>
import { oneOf } from '../../../script/util'

export default {
  name: 'q-callout',

  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'tip',
      validator (value) {
        return oneOf(value, ['tip', 'warning', 'error'])
      }
    },
    light: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      const prefix = 'q-callout'

      return {
        [`${prefix}--${this.type}`]: !!this.type,
        [`${prefix}--light`]: this.light
      }
    }
  }
}
</script>

<style lang="stylus">
  p
    margin 0
  .q-callout
    padding 16px 24px
    color #666
    border-left 5px solid
    border-radius 3px
  .q-callout__title
    font-size 16px
    font-weight 500
  .q-callout__content
    font-size 15px
    line-height 1.4

  .q-callout--tip
    background-color #E8F5FF
    border-left-color #79C6FF
  .q-callout--warning
    background-color #FFF5DC
    border-left-color #FFD567
  .q-callout--error
    background-color #FFEFF1
    border-left-color #FF8E90

  .q-callout--light
    padding 12px 16px
    border-top 1px solid #eee
    border-right 1px solid #eee
    border-bottom 1px solid #eee
    border-left-width 3px
    background-color transparent
</style>
