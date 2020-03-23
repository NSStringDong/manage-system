import {login} from '../../api/login.js'
import {setToken} from '../../utils/auth.js'

const rememberMe = true
const user = {
	state: {
		user: {},
		token: '',
		roles: [],
		// 第一次加载菜单时用到
		loadMenus: false
	},

	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_USER: (state, user) => {
			state.user = user
		},
		SET_ROLES: (state, roles) => {
			state.roles = roles
		},
		SET_LOAD_MENUS: (state, loadMenus) => {
			state.loadMenus = loadMenus
		}
	},

	actions: {
		Login({commit}, userInfo) {
			const username = userInfo.username;
			const password = userInfo.password;
			return new Promise((resolve, reject) => {
				login(username, password).then(res => {
					console.log('login_store',res);
					setToken(res.token, rememberMe)
					commit('SET_TOKEN', res.token);
					setUserInfo(res.user, commit);
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		}
	}
}

export const setUserInfo = (res, commit) => {
	// 如果没有任何权限，则赋予一个默认的权限，避免请求死循环
	if (res.roles.length === 0) {
		commit('SET_ROLES', ['ROLE_SYSTEM_DEFAULT'])
	} else {
		console.log('roles', res.roles);
		commit('SET_ROLES', res.roles)
	}
	commit('SET_USER', res)
}

export default user