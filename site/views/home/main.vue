<template lang="pug">
  .container
    q-header.header(
      :title="header.title"
      :backgroundColor="header.backgroundColor"
    )
    img(src="@/assets/logo.png")
    p {{ desc }}
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      desc: 'A Desktop UI Library For Vue.js',
      header: {
        title: {
          type: 'text',
          value: 'QuantaUI'
        },
        backgroundColor: '#fff'
      }
      // header: {
      //   title: {
      //     type: 'logo',
      //     value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PpdMWriUtBV7W7nvWoEQ_GQwYKb9LAOeVuNGcOkaYK0EZnXyYg'
      //   }
      // }
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
    border-bottom 1px solid #e8e8e8
  img
    width 20vw
  p
    margin-top 3vh
    font-size 1.6vw
    color #4E5667
    letter-spacing .1vw
</style>
