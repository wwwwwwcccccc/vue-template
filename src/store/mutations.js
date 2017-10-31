import * as type from './mutations-types.js'

export default {
	[type.HOME](state,paylod) {
		state.name = paylod;
	},
  [type.LOADING](state,paylod) {
    let handle_list = JSON.parse(JSON.stringify(state.list));

    if(typeof handle_list === 'string'){
      handle_list = JSON.parse(handle_list)
    }

    let nameList = handle_list.map((item,ind) => {
      return item.name;
    })
    let ii = nameList.indexOf(paylod.name);
    if(ii == -1){
      handle_list.push(paylod)
    }
    else{
      handle_list.splice(ii,1,paylod)
    }
    state.list = JSON.parse(JSON.stringify(handle_list));
    }
  }
