import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		menuArray: []
	},

	getters: {
		getMenuArray(state) {
			return state.menuArray;
		}
	},

	actions: {
		setMenuArray({commit}) {
			commit('setMenu');
		}
	},

	mutations:{
		setMenu(state, obj) {
			state.menuArray = obj;
		}
	},
});
export default store;