<template lang="pug">
  .radio-example
    h2 Radio 单选框
    h3 基础用法
    p 允许用户从一组选项中选择一个作为结果。如果选项过多，请考虑使用 select 选择器组件
    .component-example
      div
        span.radio-demo__title City: {{ city }}
        q-radio(
          v-model="city"
          value="北京"
        )
        q-radio(
          v-model="city"
          value="上海"
        )
        q-radio(
          v-model="city"
          value="广州"
        )
        q-radio(
          v-model="city"
          value="東京"
        )
        q-radio(
          v-model="city"
          value="San Francisco"
        )
        q-radio(
          v-model="city"
          value="New York"
        )

    h3 禁用状态
    p 添加 disabled 属性，单选框将无法被选中
    .component-example
      div
        q-radio(
          v-model="disabledValue"
          value="1"
          disabled
        ) Disabled On
        q-radio(
          v-model="disabledValue"
          value="2"
          disabled
        ) Disabled Off
</template>

<script>
export default {
  name: 'radio-example',

  data () {
    return {
      city: '北京',
      disabledValue: '1'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .radio-demo__title
    margin-bottom 16px
    display block
    line-height 1
    font-size 15px
</style>
