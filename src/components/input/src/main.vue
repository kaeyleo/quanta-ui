<template lang="pug">
  .q-input-wrapper
    input.q-input(
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :minlength="minlength"
      :max="max"
      :min="min"
      @input="$emit('input', $event.target.value)"
    )
</template>

<script>
import { oneOf } from 'src/script/util'

const availableTypes = ['text', 'email', 'number', 'password', 'tel']

export default {
  name: 'q-input',

  props: {
    name: String,
    value: [String, Number],
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return oneOf(value, availableTypes)
      }
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    max: Number,
    min: Number,
    maxlength: Number,
    minlength: Number
  }
}
</script>

<style lang="stylus">
  $input-light-color = #A6A9B4
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
    transition border-color .3s, box-shadow .4s
    &::placeholder
      color $input-light-color
    &:disabled
      cursor not-allowed
      color darken($input-light-color, 10%)
      background-color #F6F7F8
    &:not([readonly]):not([disabled])
      &:hover
        border-color $input-border-color-hover
      &:focus
        border-color $input-border-color-focus
        box-shadow 0 0 0 2px rgba($input-border-color-focus, 16%)
</style>
