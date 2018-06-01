<template lang="pug">
  .q-textarea
    textarea.q-textarea__input(
      :style="styleObj"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :rows="rows"
      :autofocus="autofocus"
      :readonly="readonly"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    )
</template>

<script>
import { oneOf } from 'src/script/util'

export default {
  name: 'q-textarea',

  props: {
    value: String,
    name: String,
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 2
    },
    maxlength: Number,
    autofocus: Boolean,
    resize: {
      type: String,
      validator (value) {
        return oneOf(value, ['none', 'both', 'horizontal', 'vertical'])
      }
    },
    readonly: Boolean,
    disabled: Boolean
  },

  computed: {
    styleObj () {
      let style = null

      if (this.resize) {
        style = {}
        style.resize = this.resize
      }

      return style
    }
  }
}
</script>

<style lang="stylus">
  $input-light-color = #A6A9B4
  $input-border-color = #D2D4DB
  $input-border-color-hover = darken(#D2D4DB, 16%)
  $input-border-color-focus = #1194F6

  .q-textarea
    &__input
      margin 0
      padding 10px 14px
      width 100%
      min-height 40px
      display block
      font-size 14px
      line-height 1.4
      border 1px solid $input-border-color
      border-radius 3px
      box-sizing border-box
      resize vertical
      outline none
      transition border-color .2s, box-shadow .3s
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
