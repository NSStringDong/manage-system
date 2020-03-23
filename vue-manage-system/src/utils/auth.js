export function getToken() {
  return window.localStorage.getItem('token')
}

export function setToken(token, rememberMe) {
	if (rememberMe) {
		return localStorage.setItem('token', token);
	} else return ''
}