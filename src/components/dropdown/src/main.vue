<template lang="pug">
  .q-dropdown
    slot
    slot(name="dropdown")
</template>

<script>
export default {
  name: 'q-dropdown'
}
</script>

<style lang="stylus">
  .q-dropdown
    position relative
</style>
