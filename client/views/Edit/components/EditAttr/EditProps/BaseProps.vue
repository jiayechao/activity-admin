<template>
  <div class="base-props">
		<div class="fs-3 text-bold">基础属性</div>
    <el-form :inline="true" size="mini">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="尺寸和位置" name="1">
        <el-form-item label="宽度">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.width" type="number"></el-input>
        </el-form-item>
        <el-form-item label="高度">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.height" type="number"></el-input>
        </el-form-item>
        <el-form-item label="x偏离">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.left" type="number"></el-input>
        </el-form-item>
        <el-form-item label="y偏离">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.top" type="number"></el-input>
        </el-form-item>
        <el-form-item label="旋转">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.rotate" type="number"></el-input>
        </el-form-item>
        <el-form-item label="快捷操作" class="flex-around">
          <el-button style="margin-bottom: 10px" v-for="item in fastPosition" :key="item.value" size="mini" round 
            @click="changePostion(item)">{{ item.title }}</el-button>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="字体" name="2">
        <el-form-item label="字体大小">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.fontSize" type="number"></el-input>
        </el-form-item>
        <el-form-item label="字体粗细">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.fontWeight" type="number"></el-input>
        </el-form-item>
        <el-form-item label="字体颜色">
          <el-color-picker size="mini" v-model="activeElement.commonStyle.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="字体间距">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.letterSpacing" type="number"></el-input>
        </el-form-item>
        <el-form-item label="行距">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.lineHeight" type="number"></el-input>
        </el-form-item>
        <el-form-item label="文本对齐">
          <el-button style="margin-bottom: 10px" v-for="item in fastTextPosition" :key="item.value" size="mini" round 
            @click="changeTextPostion(item)">{{ item.title }}</el-button>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="边框边距" name="3">
        <el-form-item label="边框宽度">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.borderWidth" type="number"></el-input>
        </el-form-item>
        <el-form-item label="边框颜色">
          <el-color-picker size="mini" v-model="activeElement.commonStyle.borderColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="边框样式">
          <el-button style="margin-bottom: 10px" v-for="item in borderTypes" :key="item.value" size="mini" round 
            @click="activeElement.commonStyle.borderStyle = item.value">{{ item.title }}</el-button>
        </el-form-item>
        <el-form-item label="边框圆角">
          <el-input class="mini-input" v-model.number="activeElement.commonStyle.borderRadius" type="number"></el-input>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="背景" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
      <el-collapse-item title="阴影" name="5">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
    <!-- 宽高 -->
    <div>

    </div>
    <!-- 位置 -->
    <!-- 旋转斜拉 -->
    </el-form>
  </div>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'
  import {ceil, subtract, divide} from 'lodash'

	export default {
    data() {
      return {
        activeNames: '1',
        borderTypes: [
          {
            value: 'solid',
            title: '实线'
          },
          {
            value: 'dotted',
            title: '虚线'
          },
          {
            value: 'dashed',
            title: '点虚线'
          },
          {
            value: 'dobble',
            title: '双虚线'
          },
        ],
        fastTextPosition: [
          {
            value: 'l',
            title: '左对齐'
          },
          {
            value: 'r',
            title: '右对齐'
          },
          {
            value: 'c',
            title: '居中对齐'
          },
        ],
        fastPosition: [
          {
            value: 'l',
            title: '左对齐'
          },
          {
            value: 'r',
            title: '右对齐'
          },
          {
            value: 't',
            title: '上对齐'
          },
          {
            value: 'b',
            title: '下对齐'
          },
          {
            value: 'xc',
            title: '水平居中'
          },
          {
            value: 'yc',
            title: '垂直居中'
          },
          {
            value: 'w',
            title: '水平铺满'
          },
          {
            value: 'h',
            title: '垂直铺满'
          },
          {
            value: 'wh',
            title: '铺满容器'
          },
        ]
      }
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
      changePostion(item) {
        const { width: containerWidth, height: containerHeight } = this.projectData
        const { width: innerWidth, height: innerHeight } = this.activeElement.commonStyle
        switch(item.value) {
          case 'l':
            this.activeElement.commonStyle.left = 0
            break
          case 't':
            this.activeElement.commonStyle.top = 0
            break
          case 'r':
            this.activeElement.commonStyle.left = subtract(containerWidth, innerWidth)
            break
          case 'b':
            this.activeElement.commonStyle.top = subtract(containerHeight, innerHeight)
            break
          case 'xc':
            this.activeElement.commonStyle.left = ceil(divide(subtract(containerWidth, innerWidth), 2),2)
            break
          case 'yc':
            this.activeElement.commonStyle.top = ceil(divide(subtract(containerHeight, innerHeight), 2),2)
            break
          case 'w':
            this.activeElement.commonStyle.left = 0
            this.activeElement.commonStyle.width = containerWidth
            break
          case 'h':
            this.activeElement.commonStyle.top = 0
            this.activeElement.commonStyle.height = containerHeight
            break
          case 'wh':
            this.activeElement.commonStyle.left = 0
            this.activeElement.commonStyle.top = 0
            this.activeElement.commonStyle.width = containerWidth
            this.activeElement.commonStyle.height = containerHeight
            break
        }
      },
      changeTextPostion(item) {
        switch(item.value) {
          case 'l':
            this.activeElement.commonStyle.textAlign = 'left'
            break
          case 'r':
            this.activeElement.commonStyle.textAlign = 'right'
            break
          case 'c':
            this.activeElement.commonStyle.textAlign = 'center'
            break
        }
      }
    }
	}
</script>

<style scoped>
.mini-input {
  width: 100px;
}
</style>
