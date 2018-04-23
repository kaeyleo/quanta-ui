<template lang="pug">
  ul.q-menu.clearfix
    slot
</template>

<script>
export default {
  name: 'q-menu',

  data () {
    return {
      myActiveIndex: this.activeIndex.toString(),
      myActiveTextColor: this.activeTextColor
    }
  },

  props: {
    activeIndex: {
      type: [String, Number],
      default: ''
    },
    activeTextColor: {
      type: String,
      default: ''
    }
  },

  methods: {
    toggleIndex (index) {
      this.myActiveIndex = index
      console.log('currentItem: ', index)
    }
  }
}
</script>

<style lang="stylus">
  .q-menu
    padding 0 16px
</style>
