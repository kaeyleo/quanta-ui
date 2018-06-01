<template lang="pug">
  .textarea-example
    h2 Textarea 文本域
    h3 基础用法
    p 用于输入多行文本，可通过 rows 属性指定可见行数
    .component-example
      div
        q-textarea.textarea-demo(placeholder="Textarea")

    h3 计数器
    p 添加 counter 属性，展示字数信息
    .component-example
      div
        q-textarea.textarea-demo(
          placeholder="Textarea"
          :counter="10"
        )

    h3 禁用、只读状态
    p 添加 disabled 属性和 readonly 属性，分别使文本域只可读和禁用
    .component-example
      div
        q-textarea.textarea-demo(value="Readonly" readonly)
        q-textarea.textarea-demo(value="Disabled" disabled)
</template>

<script>
export default {
  name: 'textarea-example'
}
</script>

<style lang="stylus" scoped>
  @import "../style.styl"

  .textarea-demo
    display inline-block
    width 360px
    vertical-align top
    & + .textarea-demo
      margin-left 16px
</style>
