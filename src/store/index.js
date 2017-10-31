import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
	name: '1',
  loading: 'demo',
  list: []
  // loading: {
  //   name: 'op',
  //   status: 'stop',
  //   options: {
  //     target: 'body'
  //   }
  // }
};

const getters = {
    title: state => state.name,
    loading: state => state.loading,
    list: state => state.list
};



export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})