<template lang="pug">
  li.q-dropdown-item
    slot
</template>

<script>
export default {
  name: 'q-dropdown-item'
}
</script>

<style lang="stylus">
  .q-dropdown-item
    padding 8px 16px
    font-size 14px
    cursor pointer
    transition .2s
    &:hover
      background-color #f6f6f6
</style>
