<template lang="pug">
  .q-dropdown(ref="dropdown")
    slot
    transition(name="slide-up" @after-leave="doDestory")
      div(v-show="visible")
        slot(name="dropdown")
</template>

<script>
export default {
  name: 'q-dropdown',

  data () {
    return {
      visible: false
    }
  },

  props: {
    trigger: {
      type: String,
      default: 'hover' // hover | click
    }
  },

  methods: {
    toggle () {
      this.visible = !this.visible
    },

    doDestory () {
      // TODO: remove event listener
    }
  },

  mounted () {
    const $dropdown = this.$refs.dropdown
    console.log($dropdown)

    if (this.trigger === 'click') {
      $dropdown.addEventListener('click', this.toggle)
    } else if (this.trigger === 'hover') {
      $dropdown.addEventListener('mouseenter', this.toggle)
      $dropdown.addEventListener('mouseleave', this.toggle)
    }
  }
}
</script>

<style lang="stylus">
  .q-dropdown
    display inline-block
    position relative

  .slide-up-enter-active
    animation slideUpIn .2s ease-in-out both

  .slide-up-leave-active
    animation slideUpOut .2s ease-in-out both

  @keyframes slideUpIn
    0%
      opacity 0
      transform-origin 0 0
      transform translateY(-12px)
    100%
      opacity 1
      transform-origin 0 0
      transform translateY(0)

  @keyframes slideUpOut
    0%
      opacity 1
      transform-origin 0% 0%
      transform translateY(0)
    100%
      opacity 0
      transform-origin 0% 0%
      transform translateY(-12px)
</style>
