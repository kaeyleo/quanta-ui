<template lang="pug">
  li.q-dropdown-item(
    @click="handleClick"
    :class="{ 'q-dropdown-item--disabled': disabled }"
  )
    slot
</template>

<script>
export default {
  name: 'q-dropdown-item',

  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick (e) {
      if (this.disabled) return
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus">
  .q-dropdown-item
    padding 8px 16px
    font-size 14px
    cursor pointer
    transition .2s
    &:hover
      background-color #f6f6f6
    &--disabled
      color #b1b1b1
      cursor not-allowed
      &:hover
        background-color transparent
</style>
