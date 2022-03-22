<template>
  <div class="edit-area box-border pt-2 h-100">
    <div class="edit-main bg-white" ref="view-panel" :style="{width: projectData.width+'px', height: projectData.height+'px'}">
      <div class="page-area h-100" :style="getCommonStyle(activePage.commonStyle)">
        <edit-shap 
          v-for="el in activePage.elements" 
          :key="el.uuid" 
          :defaultStyle="el.commonStyle"
          :style="getCommonStyle({width: el.commonStyle.width, height: el.commonStyle.height, left: el.commonStyle.left,top: el.commonStyle.top, position: el.commonStyle.position})"
          :active="el.uuid === activeElementUUID">
          <component :is="el.elName" :style="getCommonStyle({...el.commonStyle, top: 0, left: 0})" v-bind="el.propsValue"></component>
        </edit-shap>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import {getCommonStyle} from '@client/utils/dataModel'

export default {
  computed: {
    ...mapState({
      projectData: state => state.editor.projectData,
      activeElementUUID: state => state.editor.activeElementUUID
    }),
    ...mapGetters(['activePage'])
  },
  components: {
    EditShap: () => import('@client/components/EditShap/index.vue')
  },
  methods: {
    getCommonStyle,
    ...mapMutations(['setActiveElementUUID']),
    chooseElement(el) {
      this.setActiveElementUUID(el.uuid)
    }
  }
}
</script>

<style lang="less" scoped>
.edit-area {
  margin: 0 auto;
  background: #eee;
  .edit-main {
    margin: 0 auto;
    box-shadow: 0 0 1px 1px #fff;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlQTFRF9fX18PDwAAAABQ8/pgAAAAN0Uk5T/yIA41y2EwAAABhJREFUeJxjYIAC0VAQcGCQWgUCDUONBgDH8Fwzu33LswAAAABJRU5ErkJggg==");
  }
  .page-area {
    position: relative;
  }
}
</style>