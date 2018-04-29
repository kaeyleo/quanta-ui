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
        h2 Menu 菜单
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
        h2 Button 按钮
        h3 基础按钮
        p 按钮的基础用法
        .component-example
          div
            q-button.button-demo Default
            q-button.button-demo(color="info") Info
            q-button.button-demo(color="primary") Primary
            q-button.button-demo(color="success") Success
            q-button.button-demo(color="warning") Warning
            q-button.button-demo(color="error") Error
            q-button.button-demo(color="purple") Custom
          div
            q-button.button-demo(round) Default
            q-button.button-demo(color="info" round) Info
            q-button.button-demo(color="primary" round) Primary
            q-button.button-demo(color="success" round) Success
            q-button.button-demo(color="warning" round) Warning
            q-button.button-demo(color="error" round) Error
        h3 文字按钮
        p 添加 text 属性
        .component-example
          div
            q-button.button-demo(text) Default
            q-button.button-demo(color="info" text) Info
            q-button.button-demo(color="primary" text) Primary
            q-button.button-demo(color="success" text) Success
            q-button.button-demo(color="warning" text) Warning
            q-button.button-demo(color="error" text) Error
        h3 禁用状态
        p 添加 disabled 属性，按钮将被禁用
        .component-example
          div
            q-button.button-demo(text disabled) Default
            q-button.button-demo(color="info" text disabled) Info
            q-button.button-demo(color="primary" text disabled) Primary
            q-button.button-demo(color="success" text disabled) Success
            q-button.button-demo(color="warning" text disabled) Warning
            q-button.button-demo(color="error" text disabled) Error
          div
            q-button.button-demo(disabled) Default
            q-button.button-demo(color="info" disabled) Info
            q-button.button-demo(color="primary" disabled) Primary
            q-button.button-demo(color="success" disabled) Success
            q-button.button-demo(color="warning" disabled) Warning
            q-button.button-demo(color="error" disabled) Error
        h3 波纹按钮
        p 添加 ripple 属性，点击时触发水波纹效果
        .component-example
          div
            q-button.button-demo(ripple text) Default
            q-button.button-demo(color="info" text ripple) Info
            q-button.button-demo(color="primary" text ripple) Primary
            q-button.button-demo(color="success" text ripple) Success
            q-button.button-demo(color="warning" text ripple) Warning
            q-button.button-demo(color="error" text ripple) Error
          div
            q-button.button-demo(ripple) Default
            q-button.button-demo(color="info" ripple) Info
            q-button.button-demo(color="primary" ripple) Primary
            q-button.button-demo(color="success" ripple) Success
            q-button.button-demo(color="warning" ripple) Warning
            q-button.button-demo(color="error" ripple) Error
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
        h3 长按钮
        p 添加 long 属性，按钮将适应容器宽度，撑满整行
        .component-example
          div
            q-button.button-demo(long) Long Button
          div
            q-button.button-demo(color="primary" long) Long Button
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
      section.component
        h2 Callout 提示面板
        h3 基础用法
        p 提供标题、段落和高亮颜色
        .component-example
          div
            q-callout.callout-demo(title="Primary") This is a primary callout.
            q-callout.callout-demo(title="Info" type="info") This is an info callout.
            q-callout.callout-demo(title="Warning" type="warning") This is a warning callout.
            q-callout.callout-demo(title="Error" type="error") This is a error callout.
        h3 轻量的提示面板
        p 添加 light 属性，获得紧凑的布局和更浅的色调，适用于极简的UI设计和不重要的内容提示
        .component-example
          div
            q-callout.callout-demo(title="Primary" light) This is a primary callout.
            q-callout.callout-demo(title="Info" type="info" light) This is an info callout.
            q-callout.callout-demo(title="Warning" type="warning" light) This is a warning callout.
            q-callout.callout-demo(title="Error" type="error" light) This is a error callout.
      section.component
        h2 Alert 警告
        h3 基础用法
        p 用于展示警告信息，内容尽可能简短精炼
        .component-example
          div
            q-alert.alert-demo This is a message.
            q-alert.alert-demo(type="info") This is a informations.
            q-alert.alert-demo(type="success") This is a successful message.
            q-alert.alert-demo(type="warning") This is a warning notice.
            q-alert.alert-demo(type="error") This is an error message.
        h3 可关闭的警告
        p 添加 closable 属性，将会显示关闭按钮，点击可关闭警告
        .component-example
          div
            q-alert.alert-demo(closable) This is a message.
            q-alert.alert-demo(type="success" closable) This is a successful message.
        h3 自定义关闭事件
        p 绑定 on-close 事件，在关闭时触发
        .component-example
          div
            q-alert.alert-demo(
              @on-close="closeAlert"
              closable
            ) This is a message.
      section.component
        h2 Message 消息
        h3 基础用法
        p 轻量的全局提示，为用户提供快速反馈
        .component-example
          div
            q-button.message-demo(@click="showMessage('primary')") Primary
            q-button.message-demo(@click="showMessage('success')") Success
            q-button.message-demo(@click="showMessage('warning')") Warning
            q-button.message-demo(@click="showMessage('error')") Error
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
    },

    closeAlert () {
      alert('Bye bye Alert!')
    },

    showMessage (type) {
      this.$message({
        message: `This is a '${type}' message`,
        type: type,
        top: 100
      })
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

  // callout
  .callout-demo, .alert-demo
    margin-bottom 16px
    &:last-of-type
      margin-bottom 0
  // alert
  .alert-demo
    width 320px
  .message-demo
    margin-right 8px
</style>
