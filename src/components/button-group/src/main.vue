<template lang="pug">
  .q-button-group(:class="classes")
    slot
</template>

<script>
import { oneOf } from 'src/script/util'

export default {
  name: 'q-button-group',

  props: {
    round: {
      type: Boolean,
      default: false
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
      const prefix = 'q-button-group'

      return {
        [`${prefix}--${this.size}`]: !!this.size,
        [`${prefix}--round`]: this.round
      }
    }
  }
}
</script>
