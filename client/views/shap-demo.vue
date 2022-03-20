<template>
  <div ref="shap" class="element-wrap" :style="{width: width, height: height}">
    dadawdaw
    afawfw
    <div class="handle-shap" :style="{top: item[0], left: item[1], cursor: item[2]}"
      v-for="(item, index) in handlers" :key="index" @mousedown="mousedown(item)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 'auto',
      height: 'auto',
      $shap: null,
      handlers: [
        ['-2px','-2px', 'nw-resize'],
        ['-2px','calc(50% - 2px)', 'n-resize'],
        ['-2px','calc(100% - 2px)', 'ne-resize'],
        ['calc(50% - 2px)','calc(100% - 2px)', 'e-resize'],
        ['calc(100% - 2px)','calc(100% - 2px)', 'se-resize'],
        ['calc(100% - 2px)','calc(50% - 2px)', 'n-resize'],
        ['calc(100% - 2px)','-2px', 'sw-resize'],
        ['calc(50% - 2px)','-2px', 'e-resize']
      ]
    }
  },
  mounted() {
    // 缓存当前定位,当前shap的宽度
    this.$shap = this.$refs.shap
    var react = this.$shap.getBoundingClientRect()
    this.width = react.width
    this.height = react.height
  },
  methods: {
    mousedown(item) {
      console.log(event)
      var e = event
      var startX = e.clientX, startY = e.clientY
      
      // 移动开始
      const moveFn = () => {
        this.mousemove(e, item, startX, startY)
      }
      console.log(startX, startY,item)
      this.$shap.addEventListener('mousemove',moveFn, false)
      // 移动结束
      this.$shap.addEventListener('mouseup',() => {
        this.$shap.removeEventListener('mousemove', moveFn)
      }, false)
      
    },
    mousemove(e, item, ...rest) {
      var curX = e.clientX, curY = e.clientY
      var moveX = curX - rest[0], moveY = curY - rest[1]
      // this.width = rest[2] + moveX + 'px'
      // this.height = rest[3] + moveY + 'px'
      // this.handlers[5][1] = moveY + 'px'
      console.log(moveX, moveY)
      this.$forceUpdate()
    },
    mouseover() {},
    // 上下移动
    // 左右移动
    // 东北对角线移动
    // 西南对角线移动
  }
}
</script>

<style>
.element-wrap {
  position: relative;
  border: 1px dashed #aaa;
}
.handle-shap {
  position: absolute;
  width: 4px;
  height: 4px;
  border: 1px solid #aaa;
  background: #fcc;
  -moz-user-select: toggle;
}
</style>