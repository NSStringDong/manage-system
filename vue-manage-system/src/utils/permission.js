export let createMenu = function(menu) {
	let routes = [];
	menu = JSON.parse(menu);
	let routeChild = menu.content;
	return routeChild;
}