import Vue from 'vue'
import Vuex from 'vuex'

// 各个模块
import editor from './modules/editor'

const modules = {
  editor,
}

const state = {

};
const actions = {

};

const mutations = {};

const getters = {};

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules
});
