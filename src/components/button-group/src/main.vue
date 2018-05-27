<template lang="pug">
  .q-button-group(:class="classes")
    slot
</template>

<script>
export default {
  name: 'q-button-group',

  props: {
    round: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      const prefix = 'q-button-group'

      return {
        [`${prefix}--round`]: this.round
      }
    }
  }
}
</script>
