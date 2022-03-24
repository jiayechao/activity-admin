<template>
  <el-container class="h-100">
  <el-aside width="400px">
    <component-list></component-list>
  </el-aside>
  <el-main>
    <control-bar class="mb-1" @save="saveProject"></control-bar>
    <edit-area></edit-area>
  </el-main>
  <el-aside width="400px">
    <el-tabs v-model="activeAttr">
      <el-tab-pane label="属性" name="属性">
        <edit-props></edit-props>
      </el-tab-pane>
      <el-tab-pane label="事件" name="事件">
        <edit-event></edit-event>
      </el-tab-pane>
      <el-tab-pane label="动画" name="动画">
        <edit-animate></edit-animate>
      </el-tab-pane>
      <el-tab-pane label="脚本" name="脚本">
        <edit-script></edit-script>
      </el-tab-pane>
      <el-tab-pane label="页面" name="页面">
        <edit-page></edit-page>
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</el-container>
</template>

<script>
import {componentList} from '@client/plugins'
import {camelCase} from 'lodash'

export default {
  components: {
    EditArea: () => import('./components/EditArea/index.vue'),
    ComponentList: () => import('./components/ComponentList/index.vue'),
    EditPage: () => import('./components/EditAttr/EditPage.vue'),
    EditScript: () => import('./components/EditAttr/EditScript.vue'),
    EditEvent: () => import('./components/EditAttr/EditEvent.vue'),
    EditAnimate: () => import('./components/EditAttr/EditAnimate.vue'),
    EditProps: () => import('./components/EditAttr/EditProps/index.vue'),
    ControlBar: () => import('./components/ControlBar.vue')
  },
  created() {
    var currentProject = null
    if(this.$route.query.id) {
      currentProject = this.$store.state.local.projectList.find(item => item.id === this.$route.query.id)
    }
    this.$store.dispatch('setPrjectData', currentProject)
  },
  data() {
    return {
      activeAttr: '属性'
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
    // 获取默认props数据
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
    // 保存
    saveProject() {
      this.$store.commit('addProject', this.$store.state.editor.projectData)
    }
  }
}
</script>

<style scope>

</style>