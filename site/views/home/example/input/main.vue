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
</template>

<script>
export default {
  name: 'input-example',

  data () {
    return {
      value: ''
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
