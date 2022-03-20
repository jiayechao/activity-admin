import Vue from 'vue'
import Vuex from 'vuex'
import {getElementConfig} from '@/plugins/model'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前编辑器编辑工程项目数据
    projectData: {
      pages: [{
        uuid: "123",
        elements: []
      }]
    },
    currentPageIndex: 0,
    activePageUUID: "123",
    activeElementUUID: ""
  },
  getters: {
    /**
     * 当前选中的页面
     */
    activePage(state){
      return state.projectData.pages.find(v => {return v.uuid === state.activePageUUID})
    },
    /**
     * 当前选中元素
     */
    activeElement(state){
      return state.projectData.pages[state.currentPageIndex].elements.find(v => {return v.uuid === state.activeElementUUID})
    },
  },
  mutations: {
    /**
     * 往画板添加元素
     * @param state
     * @param elData
     */
    addElement(state, elData){
      let index = state.projectData.pages.findIndex(v => {return v.uuid === state.activePageUUID})
      state.projectData.pages[index].elements.push(elData);
    },
    setActiveElementUUID(state, data){
      state.activeElementUUID = data;
    },
  },
  actions: {
    addElement({commit}, elData){
      console.log(commit, elData)
      
      // let activePage = getters.activePage(state) activePage.elements.length + 
      let data = getElementConfig(elData, {zIndex: 1})
      console.log(data)
      commit('addElement', data);
      commit('setActiveElementUUID', data.uuid)
    },
  },
  modules: {
  }
})
