const getters = {
	roles: state => state.user.roles,
	user: state => state.user.user,
	loadMenus: state => state.user.loadMenus
}

export default getters