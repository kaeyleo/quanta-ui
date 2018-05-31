<template lang="pug">
  .q-checkbox
    input.q-checkbox__input(
      :id="id"
      type="checkbox"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
    )
    label.q-checkbox__label(
      :for="id"
      @click.prevent="toggle"
    )
      i.q-icon-checkbox
      slot
</template>

<script>
const _typeof = function (obj) {
  const class2type = {}
  'Boolean String Number Array Function Object Null Date RegExp Error'.split(' ').forEach((e, i) => {
    class2type[`[object ${e}]`] = e.toLowerCase()
  })
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[class2type.toString.call(obj)]
    : typeof obj
}

export default {
  name: 'q-checkbox',

  props: {
    model: [String, Number, Boolean, Array, Object],
    value: {
      type: [String, Number, Boolean, Object],
      default: ''
    },
    checked: Boolean,
    disabled: Boolean
  },

  model: {
    prop: 'model',
    event: 'change'
  },

  computed: {
    id () {
      const prefix = 'q-checkbox-'
      const key = Math.random().toString(36).slice(8)
      return `${prefix}${key}`
    },

    isArrayModel () {
      return _typeof(this.model) === 'array'
    },

    hasValue () {
      return this.$options.propsData.hasOwnProperty('value')
    },

    isChecked () {
      if (this.isArrayModel) {
        return this.model.includes(this.value)
      } else if (this.hasValue) {
        return this.model === this.value
      }

      return this.model === true
    }
  },

  methods: {
    removeModelItem (model) {
      const index = model.indexOf(this.value)
      if (index > -1) {
        model.splice(index, 1)
      }
    },

    toggle () {
      if (this.disabled) return

      if (this.isArrayModel) {
        const model = this.model

        this.isChecked ? this.removeModelItem(model) : model.push(this.value)
        this.$emit('change', model)
      } else if (this.hasValue) {
        this.$emit('change', this.isChecked ? null : this.value)
      } else {
        this.$emit('change', !this.isChecked)
      }
    }
  },

  created () {
    // 若有checked，检查model是否有值，如果没有则自动增加到model
    if (this.checked) {
      if (this.isArrayModel) {
        const model = this.model

        const index = model.indexOf(this.value)
        if (index === -1) {
          model.push(this.value)
        }
      } else if (this.hasValue) {
        this.$emit('change', this.value)
      } else {
        this.$emit('change', true)
      }
    }
  }
}
</script>

<style lang="stylus">
  .q-checkbox
    display inline-block
    height 24px
    font-size 14px
    line-height 26px
    &+.q-checkbox
      margin-left 20px

    &__input
      position absolute
      opacity 0
      &:checked
        + .q-checkbox__label
          &:before
            border-color #1194F6
            background-color #1194F6
          .q-icon-checkbox
            opacity 1
            transform scale(1)
      &:disabled
        + .q-checkbox__label
          cursor default
          color #9396A1
          &:before
            border-color #C7CAD3
            background-color #F4F4F6
          .q-icon-checkbox
            color #BEC1CB

    &__label
      position relative
      cursor pointer
      &:before
        margin-right 8px
        content ''
        display inline-block
        position relative
        top 3px
        width 15px
        height 15px
        border 1px solid #C7CAD3
        border-radius 2px
        vertical-align top
        transition .2s
      .q-icon-checkbox
        position absolute
        top 2px
        left 2px
        color #fff
        opacity 0
        transform scale(.1)
        transition .26s cubic-bezier(.43,.27,.38,1.28)
</style>
