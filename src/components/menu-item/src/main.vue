<template lang="pug">
  li.q-menu-item(
    :class="{ 'is-disabled': disabled }"
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
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
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
    &:hover, &.is-active
      color lighten($color-default, 0)
    &.is-active
      font-weight 500
  .q-menu-item.is-disabled
    color lighten($color-default, 50)
    cursor not-allowed
</style>
