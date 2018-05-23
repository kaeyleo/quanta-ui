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
    border-radius 2px
    background-color #fff
    box-sizing border-box
    box-shadow 0 3px 24px rgba(0, 0, 0, .16)
    &--small
      padding 6px 0
      min-width 80px
      .q-divider
        margin 6px 0
    &--medium
      padding 8px 0
      min-width 120px
      .q-divider
        margin 8px 0
    &--large
      padding 10px 0
      min-width 160px
      .q-dropdown-item
        padding 10px 16px
        font-size 15px
      .q-divider
        margin 10px 0
</style>
