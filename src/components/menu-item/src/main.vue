<template lang="pug">
  li.q-menu-item-wrapper
    div.q-menu-item(
      :style="itemStyle"
      :class="{ 'disabled': disabled, 'active': active }"
      @click="handleClick"
    )
      span.q-menu-item__title {{ title }}
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
    parentMenu () {
      let parent = this.$parent
      while (parent && ['q-menu'].indexOf(parent.$options.name) === -1) {
        parent = parent.$parent
      }
      return parent
    },
    activeIndex () {
      return this.parentMenu.myActiveIndex.toString()
    },
    currentIndex () {
      return this.index.toString()
    },
    active () {
      return this.activeIndex === this.currentIndex
    },
    activeTextColor () {
      return this.parentMenu.myActiveTextColor
    },
    itemStyle () {
      const style = {
        color: this.active ? this.activeTextColor : ''
      }
      return style
    }
  },

  mounted () {
    console.log(this.currentIndex, this.title, this.parentMenu, this.activeIndex)
  },

  methods: {
    handleClick () {
      if (this.disabled) return
      this.parentMenu.toggleIndex(this.currentIndex)
    }
  }
}
</script>

<style lang="stylus">
  $color-default = #222
  $color-primary = #0593FD

  .q-menu-item-wrapper
    float left
  .q-menu-item
    position relative
    cursor pointer
    padding 0 16px
    color $color-default
    transition background .3s, color .2s
    &:after
      content ''
      position absolute
      display block
      bottom -1px
      left 50%
      width 0
      height 2px
      background-color $color-primary
      transition .2s
    &.active, &:hover
      color $color-primary
      background #F5F7F8
      &:after
        left 0
        width 100%
    &.disabled
      color lighten($color-default, 50)
      cursor not-allowed
      background transparent
      &:after
        display none
</style>
