<template lang="pug">
  .q-input-wrapper
    .q-input(:class="{ 'q-input--clearable': clearable }")
      input.q-input-self(
        ref="input"
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
      span.clear-box(
        v-if="showClear"
        @click="clearInput"
      )
        i.clear-icon.q-icon-close-circle
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
    clearable: Boolean,
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
  },

  computed: {
    showClear () {
      const visible = this.clearable &&
        this.value !== '' &&
        !this.disabled &&
        !this.readonly

      return visible
    }
  },

  methods: {
    focus () {
      this.$refs.input.focus()
    },

    clearInput () {
      this.$emit('input', '')
      this.focus()
    }
  }
}
</script>

<style lang="stylus">
  $input-light-color = #A6A9B4
  $input-border-color = #D2D4DB
  $input-border-color-hover = darken(#D2D4DB, 16%)
  $input-border-color-focus = #1194F6
  $input-clear-color = #9094A0

  [class*=" q-icon-"], [class^=q-icon-]
    font-family "quanta-icons" !important
    display inline-block
    font-size 14px
    font-style normal
    font-weight 400
    font-variant normal
    line-height 1
    vertical-align middle
    -webkit-font-smoothing antialiased

  .q-input-wrapper
    display inline-block
    width 100%

  .q-input
    position relative
    &--clearable
      input
        padding-right 32px
        &:focus
          & + .clear-box .clear-icon
            opacity 1
    &:hover
      .clear-box .clear-icon
        opacity 1

  input.q-input-self
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

  .clear-box
    position absolute
    top 1px
    right 6px
    height 38px
    line-height 37px
    width 24px
    text-align center
    .clear-icon
      opacity 0
      font-size 17px
      color rgba($input-clear-color, 50%)
      cursor pointer
      transition .3s
      &:hover
        color $input-clear-color
</style>
