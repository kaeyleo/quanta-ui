<template lang="pug">
  li.q-submenu-item
    span {{ title }}
</template>

<script>
export default {
  name: 'q-submenu-item',

  data () {
    return {
    }
  },

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
  },

  mounted () {
  }
}
</script>

<style lang="stylus">
</style>
