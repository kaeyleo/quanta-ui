<template lang="pug">
  .q-switch(
    :class="{ 'q-switch--checked': status, 'q-switch--disabled': disabled }"
    :style="styleObj"
    @click="toggle"
  )
</template>

<script>
export default {
  name: 'q-switch',

  data () {
    return {
      status: this.value
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: String,
    disabled: Boolean
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  computed: {
    styleObj () {
      const style = {}

      if (this.status && this.color) {
        style.backgroundColor = this.color
      }

      return style
    }
  },

  methods: {
    toggle () {
      if (this.disabled) return

      this.status = !this.status
      this.$emit('change', this.status)
    }
  }
}
</script>

<style lang="stylus">
  .q-switch
    display inline-block
    position relative
    margin 1px 0
    width 40px
    height 22px
    border-radius 24px
    background-color #C7CAD3
    cursor pointer
    vertical-align top
    transition .2s
    &:after
      content ''
      position absolute
      top 2px
      left 2px
      width 18px
      height 18px
      border-radius 50%
      background-color #fff
      box-shadow 0 1px 1px rgba(0, 0, 0, .2)
      transition left .2s, box-shadow .3s
    &--checked
      background-color #1194F6
      &:after
        left 20px
        box-shadow 0 0 0 rgba(0, 0, 0, 0)
    &--disabled
      cursor not-allowed
      opacity .5
</style>
