import {create_UUID} from '@common/utils'

const state = {
  projectList: JSON.parse(localStorage.getItem('project')) || []
}


const mutations = {
  // 添加项目
  addProject(state, projectData) {
    if(projectData.id) {
      var currentProject = state.projectList.find(item => item.id === projectData.id)
      Object.assign(currentProject, projectData)
    } else {
      state.projectList.push({id: create_UUID(), ...projectData})
    }
    localStorage.setItem('project', JSON.stringify(state.projectList))
  },
}

export default {
  state,
  mutations
}