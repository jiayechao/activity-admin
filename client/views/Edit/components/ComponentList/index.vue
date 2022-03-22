<template>
  <div class="pt-2 px-1">
    <h2 class="mb-1">组件库</h2>
    <div class="mb-2" v-for="(elType,index) in elConfig" :key="index">
      <h4 class="mb-1">{{elType.title}}</h4>
      <div class="d-flex">
        <div class="flex-center flex-column components-lib-item mr-1 mb-1" v-for="(element,idx) in elType.components" :key="idx"
          @click="handleClick(element)">
          <div class="lib-item-img mb-1"><i :class="[element.icon]"></i></div>
          <p class="lib-item-title">{{element.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elConfig from '@client/plugins/el.config'
import {mapActions} from 'vuex'
import {camelCase} from 'lodash'
import {componentList} from '@client/plugins/index'

export default {
  data() {
    return {
      elConfig
    }
  },
  methods: {
    ...mapActions(['addElement']),
    handleClick(element) {
      let props = this.getComponentProps(element.elName);
			this.addElement({...element, needProps: props})
    },
    // 把所有的默认参数拿过来
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

<style lang="less" scoped>
h2 {
  font-weight: bold;
}
.components-lib-item {
  border: 1px solid #ccc;
  width: 80px;
  height: 60px;
  border-radius: 8px;
  transition: all .3s;
  &:hover {
    box-shadow: 0 0 6px 0 #aaa;
  }
}
</style>