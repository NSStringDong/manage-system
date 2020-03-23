import {httpRequest} from '../utils/httpRequest.js'

export function login(username, password) {
	return httpRequest({
		url: "xlradmin/auth/loginWithoutCode",
		method: 'POST',
		data: {
			username: username,
			password: password
		}
	})
}

export function buildMenu() {
	return httpRequest({
		url: 'xlradmin/api/menus/build',
		method: 'GET',
		data: ""
	})
}