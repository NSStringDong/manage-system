export let createMenu = function(menu) {
	let sideBar = [{
		icon: 'el-icon-s-platform',
		index: 'dashboard',
		title: '系统首页'
	}, {
		icon: 'el-icon-s-custom',
		index: 'expand',
		title: '拓展管理',
		subs: [{
			index: 'expand_customer',
			title: '客户管理'
		}, {
			index: 'expand_data',
			title: '数据中心'
		}]
	}];
	menu = JSON.parse(menu);
	let sideChild = menu.content;
	sideChild.forEach(item => {
		let childArr = [];
		item.children.forEach(element => {
			childArr.push({
				index: element.path,
				title: element.name
			});
		});
		sideBar.push({
			icon: item.icon,
			index: item.path,
			title: item.name,
			subs: childArr
		});
	});
	return sideBar;
}