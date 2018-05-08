<template lang="pug">
  span.q-tag
    slot
</template>

<script>
export default {
  name: 'q-tag'
}
</script>

<style lang="stylus">
  .q-tag
    display inline-block
    padding 3px 10px
    font-size 14px
    color #696a6b
    border-radius 2px
    background-color #F3F3F3
    transition .2s
    white-space nowrap
    word-break keep-all
    a
      color inherit
      text-decoration none
    &:hover
      background-color #E5E5E5
</style>
