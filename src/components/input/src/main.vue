<template lang="pug">
  .q-input-wrapper
    input.q-input(
      :placeholder="placeholder"
      v-model="value"
    )
</template>

<script>
export default {
  name: 'q-input',

  props: {
    placeholder: String,
    value: ''
  },

  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>

<style lang="stylus">
  $input-border-color = #D2D4DB
  $input-border-color-hover = darken(#D2D4DB, 16%)
  $input-border-color-focus = #1194F6

  .q-input-wrapper
    display inline-block
    width 100%

  .q-input
    padding 0 14px
    width 100%
    height 40px
    line-height 40px
    font-size 14px
    border 1px solid $input-border-color
    box-sizing border-box
    border-radius 3px
    background-color #fff
    outline none
    transition .3s
    &::placeholder
      color #A6A9B4
    &:hover
      border-color $input-border-color-hover
    &:focus
      border-color $input-border-color-focus
      box-shadow 0 0 8px rgba($input-border-color-focus, 10%)
</style>
