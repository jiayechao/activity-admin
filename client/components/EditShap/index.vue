/**
  该组件用来承载元素，设置元素的公共属性
 */
<template>
  <div class="edit-shap" :class="{active}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean
  }
}
</script>

<style lang="less" scoped>
.edit-shap {
  &.active {
    border: 1px dashed #25A589;
  }
}
</style>