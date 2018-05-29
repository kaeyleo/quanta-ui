<template lang="pug">
  .dropdown-example
    h2 Dropdown 下拉菜单
    h3 基础用法
    p 展示折叠的下拉菜单
    .component-example
      div
        q-dropdown.dropdown-demo
          span 选择分类
          q-dropdown-menu(slot="dropdown")
            q-dropdown-item 保时捷
            q-dropdown-item 凯迪拉克
            q-dropdown-item 路虎
            q-dropdown-item 玛莎拉蒂

    h3 触发方式
    p 添加 trigger 属性，定义如何触发显示下拉菜单，默认为 hover
    .component-example
      div
        q-dropdown.dropdown-demo
          span hover
          q-dropdown-menu(
            slot="dropdown"
          )
            q-dropdown-item 保时捷
            q-dropdown-item 凯迪拉克
            q-dropdown-item 路虎
            q-dropdown-item 玛莎拉蒂
        q-dropdown.dropdown-demo(
          trigger="click"
        )
          span click
          q-dropdown-menu(
            slot="dropdown"
          )
            q-dropdown-item 保时捷
            q-dropdown-item 凯迪拉克
            q-dropdown-item 路虎
            q-dropdown-item 玛莎拉蒂

    h3 菜单尺寸
    p 提供三种菜单尺寸，默认为 medium 中等大小
    .component-example
      div
        q-dropdown.dropdown-demo
          span small
          q-dropdown-menu(
            slot="dropdown"
            size="small"
          )
            q-dropdown-item 保时捷
            q-dropdown-item 凯迪拉克
            q-dropdown-item 路虎
            q-dropdown-item 玛莎拉蒂
        q-dropdown.dropdown-demo
          span medium
          q-dropdown-menu(
            slot="dropdown"
            size="medium"
          )
            q-dropdown-item 保时捷
            q-dropdown-item 凯迪拉克
            q-dropdown-item 路虎
            q-dropdown-item 玛莎拉蒂
        q-dropdown.dropdown-demo
          span large
          q-dropdown-menu(
            slot="dropdown"
            size="large"
          )
            q-dropdown-item 保时捷
            q-dropdown-item 凯迪拉克
            q-dropdown-item 路虎
            q-dropdown-item 玛莎拉蒂

    h3 分割线 和 禁用菜单项
    p 使用 &lt;q-divider&gt; 分割线组件，让列表的展示更有条理；为 q-dropdown-item 添加 disabled 属性，该菜单项将被禁用
    .component-example
      div
        q-dropdown.dropdown-demo
          span 下拉菜单
          q-dropdown-menu(
            slot="dropdown"
          )
            q-dropdown-item Angular
            q-dropdown-item(disabled) Backbone
            q-dropdown-item React
            q-dropdown-item Vue
            q-divider
            q-dropdown-item Django
            q-dropdown-item Flask
</template>

<script>
export default {
  name: 'dropdown-example'
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .dropdown-demo
    margin-right 80px
    span
      display inline-block
      padding 8px 0
      cursor pointer
</style>
