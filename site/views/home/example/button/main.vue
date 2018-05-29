<template lang="pug">
  .button-example
    h2 Button 按钮
    h3 基础按钮
    p 按钮的基础用法
    .component-example
      div
        q-button.button-demo Default
        q-button.button-demo(color="gray") Gray
        q-button.button-demo(color="blue") Blue
        q-button.button-demo(color="green") Green
        q-button.button-demo(color="gold") Gold
        q-button.button-demo(color="red") Red
        q-button.button-demo(color="purple") Custom
      div
        q-button.button-demo(round) Default
        q-button.button-demo(color="gray" round) Gray
        q-button.button-demo(color="blue" round) Blue
        q-button.button-demo(color="green" round) Green
        q-button.button-demo(color="gold" round) Gold
        q-button.button-demo(color="red" round) Red
        q-button.button-demo(color="purple" round) Custom

    h3 文字按钮
    p 添加 text 属性
    .component-example
      div
        q-button.button-demo(text) Default
        q-button.button-demo(color="gray" text) Gray
        q-button.button-demo(color="blue" text) Blue
        q-button.button-demo(color="green" text) Green
        q-button.button-demo(color="gold" text) Gold
        q-button.button-demo(color="red" text) Red

    h3 禁用状态
    p 添加 disabled 属性，按钮将被禁用
    .component-example
      div
        q-button.button-demo(text disabled) Default
        q-button.button-demo(color="gray" text disabled) Gray
        q-button.button-demo(color="blue" text disabled) Blue
        q-button.button-demo(color="green" text disabled) Green
        q-button.button-demo(color="gold" text disabled) Gold
        q-button.button-demo(color="red" text disabled) Red
      div
        q-button.button-demo(disabled) Default
        q-button.button-demo(color="gray" disabled) Gray
        q-button.button-demo(color="blue" disabled) Blue
        q-button.button-demo(color="green" disabled) Green
        q-button.button-demo(color="gold" disabled) Gold
        q-button.button-demo(color="red" disabled) Red

    h3 波纹按钮
    p 添加 ripple 属性，点击时触发水波纹效果
    .component-example
      div
        q-button.button-demo(ripple text) Default
        q-button.button-demo(color="gray" text ripple) Gray
        q-button.button-demo(color="blue" text ripple) Blue
        q-button.button-demo(color="green" text ripple) Green
        q-button.button-demo(color="gold" text ripple) Gold
        q-button.button-demo(color="red" text ripple) Red
      div
        q-button.button-demo(ripple) Default
        q-button.button-demo(color="gray" ripple) Gray
        q-button.button-demo(color="blue" ripple) Blue
        q-button.button-demo(color="green" ripple) Green
        q-button.button-demo(color="gold" ripple) Gold
        q-button.button-demo(color="red" ripple) Red

    h3 大小尺寸
    p 提供大中小三种尺寸，默认中等大小
    .component-example
      div
        q-button.button-demo(size="small") Small
        q-button.button-demo Medium
        q-button.button-demo(size="large") Large
        q-button.button-demo(size="large" color="blue") Large
        q-button.button-demo(color="blue") Medium
        q-button.button-demo(size="small" color="blue") Small
      div
        q-button.button-demo(size="small" round) Small
        q-button.button-demo(round) Medium
        q-button.button-demo(size="large" round) Large
        q-button.button-demo(size="large" color="blue" round) Large
        q-button.button-demo(color="blue" round) Medium
        q-button.button-demo(size="small" color="blue" round) Small

    h3 加载中
    p 添加 loading 属性，使按钮处于加载中状态
    .component-example
      div
        q-button.button-demo(loading) Button
        q-button.button-demo(color="blue" loading) Button
        q-button.button-demo(
          color="blue"
          :loading="button.loading"
          @click="setButtonLoading"
        ) 点击加载

    h3 长按钮
    p 添加 long 属性，按钮将适应容器宽度，撑满整行
    .component-example
      div
        q-button.button-demo(long) Long Button
      div
        q-button.button-demo(color="blue" long) Long Button

    h3 按钮组
    p 将多个按钮聚合成组，便于区分不同类型的操作。支持 round 属性和 size 属性。
    .component-example
      div
        q-button-group.button-group-demo
          q-button Left
          q-button Middle
          q-button Right
        q-button-group.button-group-demo
          q-button(color="blue") Left
          q-button(color="blue") Middle
          q-button(color="blue") Right
        q-button-group.button-group-demo(round)
          q-button(color="blue") Left
          q-button(color="blue") Middle
          q-button(color="blue") Right
      div
        q-button-group.button-group-demo
          q-button(color="blue") Download
          q-button(color="green") Demo
          q-button(color="gold") Support
        q-button-group.button-group-demo
          q-button(color="blue" disabled) Download
          q-button(color="green" disabled) Demo
          q-button(color="gold" disabled) Support
      div
        q-button-group.button-group-demo(size="small")
          q-button Small
          q-button Small
        q-button-group.button-group-demo
          q-button Default
          q-button Default
        q-button-group.button-group-demo(size="large")
          q-button Large
          q-button Large
</template>

<script>
export default {
  name: 'button-example',

  data () {
    return {
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
  @import "../style.styl"

  .button-demo
    margin 6px 3px

  // custom button color
  .q-button--purple, .q-button--purple:hover
    color #fff
    border-color #8073DD
    background-color #8073DD

  .button-group-demo
    &+.button-group-demo
      margin 8px 0 8px 12px
</style>
