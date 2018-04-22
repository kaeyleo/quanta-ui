<template lang="pug">
  ul.q-menu.clearfix
    slot
</template>

<script>
export default {
  name: 'q-menu',

  props: {
    activeIndex: {
      type: [String, Number],
      default: ''
    }
  },

  mounted () {
    console.log('activeIndex', this.activeIndex)
  }
}
</script>

<style lang="stylus">
  .q-menu
    padding 0 16px
</style>
