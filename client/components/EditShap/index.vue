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
    active: Boolean,
    defaultStyle: Object
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
      const pos = {...this.defaultStyle}
      const {left: originX, top: originY} = pos
      const startTime = Date.now()
      this.$emit('elementClick')
      const move = (event) => {
        const { clientX: curentX, clientY: currentY } = event
        pos.left = ceil(add(originX, subtract(curentX, startX)))
        pos.top = ceil(add(originY, subtract(currentY, startY)))
        this.$emit('resize', pos)
      }
      const up = () => {
        if(subtract(Date.now(), startTime) > 200) {
          this.$emit('resize')
        }
        document.removeEventListener('mousemove', move, false)
        document.removeEventListener('mouseup', up, false)
      }
      document.addEventListener('mousemove', move, false)
      document.addEventListener('mouseup', up, false)
    }
  }
}
</script>

<style lang="less" scoped>
.edit-shap {
  &.active {
    border: 1px dashed #25A589;
    cursor: move;
  }
}
</style>