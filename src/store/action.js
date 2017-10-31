import * as api from '../api'
import * as types from './mutations-types.js'

export default {
	FETCH_HOME({ commit, state }, op) {
		commit (types.LOADING,op)
	  let stop = {};
	  stop.name = op.name;
	  stop.status = !op.status;
	  setTimeout(() => {
	  	commit (types.LOADING,stop)
	  },10000)
		// api.getList()
		// 	.then((data) => {
		// 		commit (types.LOADING,stop)
		// 	})
		// 	.catch((err) => {
		// 	}) 
	},
	FETCH_THEATERS({ commit, state }, op) {
		commit (types.LOADING,op)
	  let stop = {};
	  stop.name = op.name;
	  stop.status = !op.status;
	  setTimeout(() => {
	  	commit (types.LOADING,stop)
	  },10000)
		// api.getTheaters()
		// 	.then((data) => {
		// 		commit (types.LOADING,stop)
		// 	})
		// 	.catch((err) => {
		// 	}) 

	},

	FETCH_DEMO({ commit, state }, id) {
		commit (types.LOADING,'c')
	 //      
	 //      
	 //      
		// api.getTheaters()
		// 	.then((data) => {
		// 		commit (types.HOME,data)
		// 		commit (types.LOADING,{
	 //        status: 'stop',
	 //        name: 'right',
	 //        options: {
	 //          target: '.right',
	 //          text: '数据加载中...',
	 //          fullscreen: false
	 //        }
	 //      })
		// 	})
		// 	.catch((err) => {
		// 	}) 

	},

	FETCH_AAAAAAAA({ commit, state }, id) {
		commit (types.LOADING,'mm')

	}


	
}