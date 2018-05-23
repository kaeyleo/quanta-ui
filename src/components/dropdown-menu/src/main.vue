<template lang="pug">
  ul.q-dropdown-menu
    slot
</template>

<script>
export default {
  name: 'q-dropdown-menu'
}
</script>

<style lang="stylus">
  .q-dropdown-menu
    padding 8px 0
    min-width 80px
    border-radius 2px
    background-color #fff
    box-sizing border-box
    box-shadow 0 3px 24px rgba(0, 0, 0, .16)
    z-index 999
</style>
