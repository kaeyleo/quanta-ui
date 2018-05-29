<template lang="pug">
  .input-example
    h2 Input 输入框
    h3 基础用法
    .component-example
      div
        q-input.input-demo(placeholder="Input something...")
        q-input.input-demo(
          v-model="value"
        )
</template>

<script>
export default {
  name: 'input-example',

  data () {
    return {
      value: '我是输入框 :D'
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
</style>
