<template lang="pug">
  ul.q-dropdown-menu(:class="classes")
    slot
</template>

<script>
import { oneOf } from 'src/script/util'

export default {
  name: 'q-dropdown-menu',

  props: {
    size: {
      type: String,
      default: 'medium', // small | medium | large
      validator (value) {
        return oneOf(value, ['small', 'medium', 'large'])
      }
    }
  },

  computed: {
    classes () {
      const prefix = 'q-dropdown-menu'

      return {
        [`${prefix}--${this.size}`]: !!this.size
      }
    }
  }
}
</script>

<style lang="stylus">
  .q-dropdown-menu
    padding 10px 0
    min-width 120px
    border-radius 2px
    background-color #fff
    box-sizing border-box
    box-shadow 0 3px 24px rgba(0, 0, 0, .16)
    &--large
      padding 10px 0
      min-width 160px
      .q-dropdown-item
        padding 10px 16px
        font-size 15px
    &--small
      padding 6px 0
      min-width 80px
</style>
