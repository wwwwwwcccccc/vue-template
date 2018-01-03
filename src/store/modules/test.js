import { TEST } from '../mutation-types'
import { get } from '@/api/test'

const test = {
	state: {
		say: 'hello world'
	},
	mutation: {
		TEST: state => {
			state.say = 'hello saber!'
		}
	},
	actions: {
		// 测试
    TEST ({ commit }, data) {
      return new Promise((resolve, reject) => {
        get(data).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
	}
}

export default test