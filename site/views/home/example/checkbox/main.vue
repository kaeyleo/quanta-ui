<template lang="pug">
  .checkbox-example
    h2 Checkbox 多选框
    h3 基础用法
    p 允许用户在一组选项中进行多项选择
    .component-example
      div
        span.checkbox-demo__title {{ city }}
        q-checkbox(v-model="city" value="北京") 北京
        q-checkbox(v-model="city" value="上海") 上海
        q-checkbox(v-model="city" value="广州") 广州
        q-checkbox(v-model="city" value="東京") 東京
        q-checkbox(v-model="city" value="San Francisco" checked) San Francisco
        q-checkbox(v-model="city" value="New York") New York

    h3 禁用状态
    p 添加 disabled 属性，多选框将无法被选中
    .component-example
      div
        q-checkbox(v-model="disabledValue" value="1" disabled) Disabled On
        q-checkbox(v-model="disabledValue" value="2" disabled) Disabled Off
</template>

<script>
export default {
  name: 'checkbox-example',

  data () {
    return {
      city: ['上海'],
      disabledValue: '1'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .checkbox-demo__title
    margin-bottom 16px
    display block
    line-height 1
    font-size 15px
</style>
