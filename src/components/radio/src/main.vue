<template lang="pug">
  .q-radio
    input.q-radio__input(
      :id="id"
      :name="name"
      type="radio"
      :value="value"
      :checked="checked"
    )
    label.q-radio__label(
      :for="id"
      @click="toggle"
    )
      slot
      template(v-if="!$slots.default") {{ value }}
</template>

<script>
export default {
  name: 'q-radio',

  props: {
    model: [String, Number, Boolean],
    value: [String, Number, Boolean],
    name: [String, Number]
  },

  model: {
    prop: 'model',
    event: 'change'
  },

  computed: {
    id () {
      const prefix = 'q-radio-'
      const key = Math.random().toString(36).slice(8)
      return `${prefix}${key}`
    },
    checked () {
      return this.model === this.value
    }
  },

  methods: {
    toggle () {
      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="stylus">
  .q-radio
    display inline-block
    cursor pointer
    height 24px
    font-size 14px
    line-height 26px
    &+.q-radio
      margin-left 20px
    &__input
      position absolute
      opacity 0
      &:checked
        + .q-radio__label
          &:before
            border-color #1194F6
          &:after
            opacity 1
            transform scale(1.6)
    &__label
      position relative
      cursor pointer
      &:before
        margin-right 8px
        content ''
        display inline-block
        width 16px
        height 16px
        position relative
        top 3px
        vertical-align top
        border-radius 50%
        border 1px solid #C7CAD3
        transition .5s
      &:after
        position absolute
        top 6px
        left 6px
        content ''
        display inline-block
        width 6px
        height 6px
        border-radius 50%
        background-color #1194F6
        opacity 0
        transition .2s
</style>
