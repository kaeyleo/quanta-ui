<template lang="pug">
  .container
    q-header.header
    img(src="@/assets/logo.png")
    p {{ desc }}
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      desc: 'A Desktop UI Library For Vue.js'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    margin-top 32vh
  .header
    margin 0 auto
    position fixed
    top 0
    left 0
  img
    width 20vw
  p
    margin-top 3vh
    font-size 1.6vw
    color #4E5667
    letter-spacing .1vw
</style>
