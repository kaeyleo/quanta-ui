<template lang="pug">
  .container
    //- q-header.header(
    //-   :title="header.title"
    //-   :backgroundColor="header.backgroundColor"
    //- )
    .hero
      img(src="@/assets/logo.png")
      p {{ desc }}
      //- router-link(to="/guide") Guide

    .component-content
      //- section.component
      //-   h2 Menu 菜单
      //-   .component-example
      //-     q-menu.example-menu(v-bind="menu")
      //-       q-menu-item(index="1" title="首页")
      //-       q-menu-item(index="2" title="设计")
      //-       q-menu-item(index="3" title="开发" disabled)
      //-       q-menu-item(index="4" title="探索")
      //-         q-submenu-item(index="4-1" title="音乐")
      //-         q-submenu-item(index="4-2" title="游戏")
      //-         q-submenu-item(index="4-3" title="体育")
      //-       q-menu-item(index="5" title="活动")

      section.component
        button-example

      section.component
        callout-example

      section.component
        alert-example

      section.component
        message-example

      section.component
        tag-example

      section.component
        dropdown-example

      section.component
        radio-example

      section.component
        input-example
</template>

<script>
import ButtonExample from './example/button/main'
import CalloutExample from './example/callout/main'
import AlertExample from './example/alert/main'
import MessageExample from './example/message/main'
import TagExample from './example/tag/main'
import DropdownExample from './example/dropdown/main'
import RadioExample from './example/radio/main'
import InputExample from './example/input/main'

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
      }
    }
  },

  components: {
    ButtonExample,
    CalloutExample,
    AlertExample,
    MessageExample,
    TagExample,
    DropdownExample,
    RadioExample,
    InputExample
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

  .example-menu
    line-height 46px
</style>
