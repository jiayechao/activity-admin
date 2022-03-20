<template>
  <div ref="shap" class="element-wrap" :style="{width: width, height: height, top: top, left: left}">
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
      top: 'auto',
      left: 'auto',
      direct: ['t','l','r','b','tl','tr','bl','br'],
      handlers: [
        ['-2px','-2px', 'nw-resize', 'xy'],
        ['-2px','calc(50% - 2px)', 'n-resize', 'y'],
        ['-2px','calc(100% - 2px)', 'ne-resize', 'xy'],
        ['calc(50% - 2px)','calc(100% - 2px)', 'e-resize', 'x'],
        ['calc(100% - 2px)','calc(100% - 2px)', 'se-resize', 'xy'],
        ['calc(100% - 2px)','calc(50% - 2px)', 'n-resize', 'y'],
        ['calc(100% - 2px)','-2px', 'sw-resize', 'xy'],
        ['calc(50% - 2px)','-2px', 'e-resize', 'x']
      ]
    }
  },
  methods: {
    mousedown(item) {
      var e = event
      // 缓存当前定位,当前shap的宽度
      var $shap = this.$refs.shap
      var react = $shap.getBoundingClientRect()
      var startX = e.clientX, startY = e.clientY
      var width = react.width, height = react.height
      // 移动开始
      const moveFn = (e) => {
        this.mousemove(e, item, startX, startY, width, height)
      }
      console.log(startX, startY,item)
      document.addEventListener('mousemove',moveFn, false)
      // 移动结束
      document.addEventListener('mouseup',() => {
        document.removeEventListener('mousemove', moveFn)
      }, false)
      
    },
    mousemove(e, item, ...rest) {
      var curX = e.clientX, curY = e.clientY
      var moveX = curX - rest[0], moveY = curY - rest[1]
      console.log(e, curY, rest[0], rest[1])
      if(item[3].includes('x')) {
        this.width = rest[2] + moveX + 'px'
        this.left = moveX * 2 + 'px'

      }
      if(item[3].includes('y')) {
        this.height = rest[3] + moveY + 'px'
        this.top = moveY * 2 + 'px'
      }
      this.$forceUpdate()
    },
  }
}
</script>

<style>
.element-wrap {
  position: absolute;
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