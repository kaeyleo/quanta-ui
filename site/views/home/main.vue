<template lang="pug">
  .container
    q-header.header(
      :title="header.title"
      :backgroundColor="header.backgroundColor"
    )
    .hero
      img(src="@/assets/logo.png")
      p {{ desc }}
      router-link(to="/guide") Guide
    .component-content
      section.component
        h3 Menu
        .component-example
          q-menu(:activeIndex="menu.activeIndex")
            q-menu-item(index="1" title="首页")
            q-menu-item(index="2" title="设计")
            q-menu-item(index="3" title="开发" disabled)
            q-menu-item(index="4" title="探索")
            q-menu-item(index="5" title="活动")
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
      },
      // header: {
      //   title: {
      //     type: 'logo',
      //     value: 'http://p7jp7q3ay.bkt.clouddn.com/logo.png?v=1.0.0'
      //   }
      // }
      menu: {
        activeIndex: 1
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    margin-top 60px
  .header
    margin 0 auto
    position fixed
    top 0
    left 0
    border-bottom 1px solid #e8e8e8
  .hero
    padding 40px 0
    img
      width 20vw
    p
      margin-top 3vh
      font-size 1.6vw
      color #4E5667
      letter-spacing .1vw
  .component-content
    margin 0 auto
    width 800px
  .component
    h3
      font-size 20px
      font-weight 400
    .component-example
      border 1px solid #ebedf0
      border-radius 2px
      margin 0 0 16px
      padding 24px
</style>
