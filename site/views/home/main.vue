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
        h2 Menu
        .component-example
          q-menu.example-menu(v-bind="menu")
            q-menu-item(index="1" title="首页")
            q-menu-item(index="2" title="设计")
            q-menu-item(index="3" title="开发" disabled)
            q-menu-item(index="4" title="探索")
              q-submenu-item(index="4-1" title="音乐")
              q-submenu-item(index="4-2" title="游戏")
              q-submenu-item(index="4-3" title="体育")
            q-menu-item(index="5" title="活动")
      section.component
        h2 Button
        h3 基础按钮
        p 按钮的基础用法
        .component-example
          div
            q-button.button-demo Button
            q-button.button-demo 按钮
          div
            q-button.button-demo Plain
            q-button.button-demo(color="info") Info
            q-button.button-demo(color="primary") Primary
            q-button.button-demo(color="success") Success
            q-button.button-demo(color="warning") Warning
            q-button.button-demo(color="error") Error
            q-button.button-demo(color="purple") Custom
          div
            q-button.button-demo(round) Plain
            q-button.button-demo(color="info" round) Info
            q-button.button-demo(color="primary" round) Primary
            q-button.button-demo(color="success" round) Success
            q-button.button-demo(color="warning" round) Warning
            q-button.button-demo(color="error" round) Error
        h3 禁用状态
        .component-example
          div
            q-button.button-demo(disabled) Plain
            q-button.button-demo(color="info" disabled) Info
            q-button.button-demo(color="primary" disabled) Primary
            q-button.button-demo(color="success" disabled) Success
            q-button.button-demo(color="warning" disabled) Warning
            q-button.button-demo(color="error" disabled) Error
        h3 波纹按钮
        p 点击触发水波纹效果
        .component-example
          div
            q-button.button-demo(ripple) Ripple
            q-button.button-demo(color="info" ripple) Ripple
            q-button.button-demo(color="primary" ripple) Ripple
            q-button.button-demo(color="success" ripple) Ripple
            q-button.button-demo(color="warning" ripple) Ripple
            q-button.button-demo(color="error" ripple) Ripple
        h3 大小尺寸
        p 提供大中小三种尺寸，默认中等大小
        .component-example
          div
            q-button.button-demo(size="small") Small
            q-button.button-demo Medium
            q-button.button-demo(size="large") Large
            q-button.button-demo(size="large" color="primary") Large
            q-button.button-demo(color="primary") Medium
            q-button.button-demo(size="small" color="primary") Small
          div
            q-button.button-demo(size="small" round) Small
            q-button.button-demo(round) Medium
            q-button.button-demo(size="large" round) Large
            q-button.button-demo(size="large" color="primary" round) Large
            q-button.button-demo(color="primary" round) Medium
            q-button.button-demo(size="small" color="primary" round) Small
        h3 加载中
        p 添加 loading 属性，使按钮处于加载中状态
        .component-example
          div
            q-button.button-demo(loading) Button
            q-button.button-demo(color="primary" loading) Button
            q-button.button-demo(
              color="primary"
              :loading="button.loading"
              @click="setButtonLoading"
            ) 点击加载
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
        activeIndex: 1,
        activeTextColor: '#409EFF'
      },
      button: {
        loading: false
      }
    }
  },
  methods: {
    setButtonLoading () {
      this.button.loading = true
      setTimeout(() => {
        this.button.loading = false
      }, 1600)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    margin-top 60px
    padding-bottom 160px
  .header
    margin 0 auto
    position fixed
    top 0
    left 0
    border-bottom 1px solid #e8e8e8
  .hero
    padding 40px 0
    text-align center
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
    margin-bottom 60px
    h2
      margin-bottom 32px
      font-size 28px
    h3
      margin 0
      font-size 20px
      color #222
      font-weight 400
    p
      margin 8px 0 0 0
      font-size 14px
      color #888
    .component-example
      margin 16px 0 40px 0
      border 1px solid #ebedf0
      border-radius 2px
      padding 24px
  .example-menu
    line-height 46px
  .button-demo
    margin 6px 3px

  // custom button color
  .q-button--purple, .q-button--purple:hover
    color #fff
    border-color #8073DD
    background-color #8073DD
</style>
