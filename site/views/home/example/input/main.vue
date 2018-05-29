<template lang="pug">
  .input-example
    h2 Input 输入框
    h3 基础用法
    .component-example
      div
        q-input.input-demo(
          v-model="value"
          placeholder="Input something..."
        )
        q-input.input-demo(
          v-model="value"
          placeholder="Readonly"
          readonly
        )
        q-input.input-demo(
          v-model="value"
          placeholder="Disabled"
          disabled
        )
    h3 带清空按钮的输入框
    p 添加 clearable 属性，可将内容一键清空
    .component-example
      div
        q-input.input-demo--long(
          v-model="clearValue"
          clearable
        )
</template>

<script>
export default {
  name: 'input-example',

  data () {
    return {
      value: '',
      clearValue: 'Hover me and clear the input'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .input-demo
    width 220px
    &+.input-demo
      margin-left 20px
    &--long
      width 260px
</style>
