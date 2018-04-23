<template lang="pug">
  li.q-menu-item(
    :style="itemStyle"
    :class="{ 'disabled': disabled, 'active': active }"
    @click="handleClick"
  ) {{ title }}
</template>

<script>
export default {
  name: 'q-menu-item',

  props: {
    title: {
      type: String,
      default: ''
    },
    index: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    activeIndex () {
      return this.$parent.myActiveIndex.toString()
    },
    currentIndex () {
      return this.index.toString()
    },
    active () {
      return this.activeIndex === this.currentIndex
    },
    activeTextColor () {
      return this.$parent.myActiveTextColor
    },
    itemStyle () {
      const style = {
        color: this.active ? this.activeTextColor : ''
      }
      return style
    }
  },

  mounted () {
    console.log(this.currentIndex, this.title)
  },

  methods: {
    handleClick () {
      if (this.disabled) return
      this.$parent.toggleIndex(this.currentIndex)
    }
  }
}
</script>

<style lang="stylus">
  $color-default = #333

  .q-menu-item
    box-sizing border-box
    padding 0 16px
    float left
    font-size 16px
    color lighten($color-default, 30)
    cursor pointer
    transition .2s
    &:hover, &.active
      color lighten($color-default, 0)
    &.active
      font-weight 500
  .q-menu-item.disabled
    color lighten($color-default, 56)
    cursor not-allowed
</style>
