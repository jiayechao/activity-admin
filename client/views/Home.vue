<template>
  <el-container>
  <el-aside width="200px">
    <h4>组件库</h4>
    <div class="components-lib-item" v-for="(element,i) in components" :key="i"
          @click="handleClick(element)">
      <div class="lib-item-img"><i :class="[element.icon]"></i></div>
      <p class="lib-item-title">{{element.title}}</p>
    </div>
  </el-aside>
  <el-main>
    <edit-area></edit-area>
  </el-main>
  <el-aside width="200px">
    <edit-attr></edit-attr>
  </el-aside>
</el-container>
</template>

<script>
import {componentList} from '@/plugins'
import {camelCase} from 'lodash'

export default {
  components: {
    EditArea: () => import('@/components/EditArea/index.vue'),
    EditAttr: () => import('@/components/EditAttr/index.vue'),
  },
  data() {
    return {
      components: [
        {
          icon: 'el-icon-finished',
          title: '文本',
          elName: 'ad-text',
          valueType: '', // 标识数据类型，用于表单组件
          defaultStyle: {
            height: 40
          }
        },
        {
          icon: 'el-icon-img',
          title: 'img',
          elName: 'ad-img',
          valueType: '', // 标识数据类型，用于表单组件
          defaultStyle: {
            height: 40
          }
        }
      ]
    }
  },
  methods: {
    handleClick(element) {
      /**
			 * 点击事件, add-element事件，参数： 当前组件对象
			 * @param item
			 */
      let props = this.getComponentProps(element.elName);
      console.log(props)
			this.$store.dispatch('addElement', {...element, needProps: props})
    },
    /**
			 * 根据elname获取组件默认props数据
			 * @param elName
			 */
			getComponentProps(elName) {
        let elComponentData
				for (let key in componentList) {
					if (key.toLowerCase() === camelCase(elName).toLowerCase()) {
						elComponentData = componentList[key];
						break;
					}
				}
				if (!elComponentData) return {}

				let props = {}
				for (let key in elComponentData.props) {
					props[key] = [Object, Array].includes(elComponentData.props[key].type) ? elComponentData.props[key].default() : elComponentData.props[key].default
				}
				return props;
			},
  }
}
</script>

<style scope>
.components-lib-item {
  border: 1px solid #ccc;
  width: 60px;
  height: 60px;
  margin: 0 20px 20px 0;
}
</style>