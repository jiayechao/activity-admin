<template>
  <!-- 该组件用来承载元素，设置元素的公共属性 -->
  <div ref="edit-shap" class="edit-shap" :class="{active}" @mousedown="startMove">
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { ceil, add, subtract } from 'lodash'

export default {
  props: {
    active: Boolean
  },
  computed: {
    ...mapState({
      projectData: state => state.editor.projectData,
    }),
    ...mapGetters([
      'activeElement',
    ]),
  },
  methods: {
    startMove(e) {
      const { clientX: startX, clientY: startY } = e
      const {left: originX, top: originY} = this.activeElement.commonStyle
      console.log(startY,startX)
       
      const move = (event) => {
        const { clientX: curentX, clientY: currentY } = event
        console.log(curentX, currentY, ceil(add(originX, subtract(curentX, startX))), ceil(add(originX, subtract(currentY, startY))))
        this.activeElement.commonStyle.left = ceil(add(originX, subtract(curentX, startX)))
        this.activeElement.commonStyle.top = ceil(add(originY, subtract(currentY, startY)))
      }
      document.addEventListener('mousemove', move, false)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move)
      })
    }
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