<template lang="pug">
  li.q-menu-item-wrapper
    div.q-menu-item(
      :style="itemStyle"
      :class="{ 'disabled': disabled, 'active': active }"
      @click="handleClick"
    )
      span.q-menu-item__title {{ title }}
    transition(name="slide")
      ul.q-submenu(
        v-if="$slots && $slots.default"
        :style="dropStyle"
        v-show="isOpen"
      )
        slot
</template>

<script>
import { getStyle } from 'src/script/util'

export default {
  name: 'q-menu-item',

  data () {
    return {
      dropWidth: '',
      isOpen: false
    }
  },

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
    },
    dropStyle () {
      return {
        'min-width': this.dropWidth
      }
    }
  },

  mounted () {
    this.dropWidth = getStyle(this.$el, 'width')
    // console.log(this.currentIndex, this.title, this.parentMenu, this.activeIndex)
  },

  methods: {
    handleClick () {
      if (this.disabled) return
      this.parentMenu.toggleIndex(this.currentIndex)
      if (this.$slots && this.$slots.default && this.$slots.default.length > 0) {
        console.log(this.$slots.default)
        this.isOpen = true
      }
    }
  }
}
</script>

<style lang="stylus">
  $color-default = #555
  $color-primary = #0593FD

  .q-menu-item, .q-submenu-item
    padding 0 16px
    color $color-default
    cursor pointer

  .q-menu-item-wrapper
    float left
  .q-menu-item
    position relative
    transition background-color .3s, color .2s
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
      &:after
        left 0
        width 100%
    &.active
      background-color #F5F7F8
    &.disabled
      color lighten($color-default, 36)
      cursor not-allowed
      background-color transparent
      &:after
        display none

  .q-submenu
    padding 6px 0
    position absolute
    margin-top 4px
    z-index 10
    border-radius 2px
    background-color #fff
    overflow hidden
    box-shadow 0 1px 6px rgba(0,0,0,.2)

  .q-submenu-item
    transition background-color .3s, color .2s
    &:hover
      background-color #F5F7F8

  .slide-enter-active, .slide-leave-active
    transition .3s
  .slide-enter, .slide-leave-to
    opacity 0
    margin-top -16px
</style>
