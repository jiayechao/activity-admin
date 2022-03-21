<template>
  <el-container>
  <el-aside width="300px">
    <component-list></component-list>
  </el-aside>
  <el-main>
    <edit-area></edit-area>
  </el-main>
  <el-aside width="300px">
    <edit-attr></edit-attr>
  </el-aside>
</el-container>
</template>

<script>
import {componentList} from '@client/plugins'
import {camelCase} from 'lodash'

export default {
  components: {
    EditArea: () => import('./components/EditArea/index.vue'),
    EditAttr: () => import('./components/EditAttr/index.vue'),
    ComponentList: () => import('./components/ComponentList/index.vue')
  },
  created() {
    this.$store.dispatch('setPrjectData')
  },
  data() {
    return {
      
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

</style>