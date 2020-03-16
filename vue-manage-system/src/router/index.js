import Vue from 'vue';
import Router from 'vue-router/dist/vue-router.min.js';

Vue.use(Router);

// 此处代码是为了解决单个关闭Tags时，当关闭最后一个tag时报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const tabs = r => require.ensure([], () => r(require('../components/page/Tabs.vue')), 'tabs');
const home = r => require.ensure([], () => r(require('../components/common/Home.vue')), 'home');
const login = r => require.ensure([], () => r(require('../components/page/Login.vue')), 'login');
const dashboard = r => require.ensure([], () => r(require('../components/page/Dashboard.vue')), 'dashboard');
/***********************************运营管理******************************/
const base_cooperation = r => require.ensure([], () => r(require('../components/page/operation/base_cooperation.vue')), 'base_cooperation');
const partnerDetail = r => require.ensure([], () => r(require('../components/page/operation/base_cooperation_detail.vue')), 'base_cooperation_detail');
const base_fee = r => require.ensure([], () => r(require('../components/page/operation/base_fee.vue')), 'base_fee');
const base_rule = r => require.ensure([], () => r(require('../components/page/operation/base_rule.vue')), 'base_rule');
const base_user = r => require.ensure([], () => r(require('../components/page/operation/base_user.vue')), 'base_user');
const base_chargeOrder = r => require.ensure([], () => r(require('../components/page/operation/base_chargeOrder.vue')), 'base_chargeOrder');
const base_rechargeMoney = r => require.ensure([], () => r(require('../components/page/operation/base_rechargeMoney.vue')), 'base_rechargeMoney');
const base_coupon = r => require.ensure([], () => r(require('../components/page/operation/base_coupon.vue')), 'base_coupon');
const base_message = r => require.ensure([], () => r(require('../components/page/operation/base_message.vue')), 'base_message');
const base_refund = r => require.ensure([], () => r(require('../components/page/operation/base_refund.vue')), 'base_refund');
/***********************************运营管理END******************************/
/***********************************售前管理*********************************/
const presale_contract = r => require.ensure([], () => r(require('../components/page/presale/presale_contract.vue')), 'presale_contract');
const presale_send = r => require.ensure([], () => r(require('../components/page/presale/presale_send.vue')), 'presale_send');
const presale_online = r => require.ensure([], () => r(require('../components/page/presale/presale_online.vue')), 'presale_online');
const presale_siteSurvey = r => require.ensure([], () => r(require('../components/page/presale/presale_siteSurvey.vue')), 'presale_siteSurvey');
const presale_electrician = r => require.ensure([], () => r(require('../components/page/presale/presale_electrician.vue')), 'presale_electrician');
const presale_order = r => require.ensure([], () => r(require('../components/page/presale/presale_order.vue')), 'presale_order');
const presale_reject = r => require.ensure([], () => r(require('../components/page/presale/presale_reject.vue')), 'presale_reject');
const presale_transfer = r => require.ensure([], () => r(require('../components/page/presale/presale_transfer.vue')), 'presale_transfer');
/***********************************售前管理END******************************/
/***********************************拓展管理*********************************/
const expand_customer = r => require.ensure([], () => r(require('../components/page/expand/expand_customerList.vue')), 'expand_customer');
const expand_customerDetail = r => require.ensure([], () => r(require('../components/page/expand/expand_customerDetail.vue')), 'expand_customerDetail');
const expand_data = r => require.ensure([], () => r(require('../components/page/expand/expand_data.vue')), 'expand_data');
const expand_dataDetail = r => require.ensure([], () => r(require('../components/page/expand/expand_dataDetail.vue')), 'expand_dataDetail');
/***********************************拓展管理END******************************/
/***********************************站点管理*********************************/
const site_station = r => require.ensure([], () => r(require('../components/page/site/site_station.vue')), 'site_station');
const site_device = r => require.ensure([], () => r(require('../components/page/site/site_device.vue')), 'site_device');
const site_module = r => require.ensure([], () => r(require('../components/page/site/site_module.vue')), 'site_module');
const site_meshModule = r => require.ensure([], () => r(require('../components/page/site/site_meshModule.vue')), 'site_meshModule');
const site_simManage = r => require.ensure([], () => r(require('../components/page/site/site_simManage.vue')), 'site_simManage');
/***********************************站点管理END******************************/
/***********************************维护管理*********************************/
const defend_warning = r => require.ensure([], () => r(require('../components/page/defend/defend_warning.vue')), 'defend_warning');
const defend_orderAnalys = r => require.ensure([], () => r(require('../components/page/defend/defend_orderAnalys.vue')), 'defend_orderAnalys');
const defend_hitchAnalys = r => require.ensure([], () => r(require('../components/page/defend/defend_hitchAnalys.vue')), 'defend_hitchAnalys');
const defend_upgrade = r => require.ensure([], () => r(require('../components/page/defend/defend_upgrade.vue')), 'defend_upgrade');
const defend_hardDevice = r => require.ensure([], () => r(require('../components/page/defend/defend_hardDevice.vue')), 'defend_hardDevice');
const defend_maintance = r => require.ensure([], () => r(require('../components/page/defend/defend_maintance.vue')), 'defend_maintance');
const defend_maintanceAnalys = r => require.ensure([], () => r(require('../components/page/defend/defend_maintanceAnalys.vue')), 'defend_maintanceAnalys');
const defend_map = r => require.ensure([], () => r(require('../components/page/defend/defend_map.vue')), 'defend_map');
const defend_message = r => require.ensure([], () => r(require('../components/page/defend/defend_message.vue')), 'defend_message');
const defend_testOrder = r => require.ensure([], () => r(require('../components/page/defend/defend_testOrder.vue')), 'defend_testOrder');
/***********************************维护管理END******************************/
/***********************************财务管理*********************************/
const finance_carBill = r => require.ensure([], () => r(require('../components/page/finance/finance_carBill.vue')), 'finance_carBill');
const finance_installer = r => require.ensure([], () => r(require('../components/page/finance/finance_installer.vue')), 'finance_installer');
const finance_4SBill = r => require.ensure([], () => r(require('../components/page/finance/finance_4SBill.vue')), 'finance_4SBill');
const finance_stationBill = r => require.ensure([], () => r(require('../components/page/finance/finance_stationBill.vue')), 'finance_stationBill');
const finance_propertyBill = r => require.ensure([], () => r(require('../components/page/finance/finance_propertyBill.vue')), 'finance_propertyBill');
const finance_reward = r => require.ensure([], () => r(require('../components/page/finance/finance_reward.vue')), 'finance_reward');
const finance_applyCash = r => require.ensure([], () => r(require('../components/page/finance/finance_applyCash.vue')), 'finance_applyCash');
const finance_liquidation_old = r => require.ensure([], () => r(require('../components/page/finance/finance_liquidation_old.vue')), 'finance_liquidation_old');
const finance_liquidation = r => require.ensure([], () => r(require('../components/page/finance/finance_liquidation.vue')), 'finance_liquidation');
const finance_commercial = r => require.ensure([], () => r(require('../components/page/finance/finance_commercial.vue')), 'finance_commercial');
const finance_ammeter = r => require.ensure([], () => r(require('../components/page/finance/finance_ammeter.vue')), 'finance_ammeter');
/***********************************财务管理END******************************/
/***********************************报表管理*********************************/
const charts_bikeAnalys = r => require.ensure([], () => r(require('../components/page/charts/charts_bikeAnalys.vue')), 'charts_bikeAnalys');
const charts_operationAnalys = r => require.ensure([], () => r(require('../components/page/charts/charts_operationAnalys.vue')), 'charts_operationAnalys');
const charts_carAnalys = r => require.ensure([], () => r(require('../components/page/charts/charts_carAnalys.vue')), 'charts_carAnalys');
const charts_managerAnalys = r => require.ensure([], () => r(require('../components/page/charts/charts_managerAnalys.vue')), 'charts_managerAnalys');
const charts_mainAnalys = r => require.ensure([], () => r(require('../components/page/charts/charts_mainAnalys.vue')), 'charts_mainAnalys');
/***********************************报表管理END******************************/
/***********************************绩效管理*********************************/
const performance_analys = r => require.ensure([], () => r(require('../components/page/performance/performance_analys.vue')), 'performance_analys');
/***********************************绩效管理END******************************/
/***********************************系统管理*********************************/
const system_user = r => require.ensure([], () => r(require('../components/page/system/system_user.vue')), 'system_user');
const system_form = r => require.ensure([], () => r(require('../components/page/system/system_form.vue')), 'system_form');
const system_player = r => require.ensure([], () => r(require('../components/page/system/system_player.vue')), 'system_player');
// const system_right = r => require.ensure([], () => r(require('../components/page/system/system_right.vue')), 'system_right');
/***********************************系统管理END******************************/

/**
 * 通用路由表
 * @type {Array}
 */
export let constantRouterMap = [{
	path: '/',
	redirect: '/dashboard'
},{
	path: '/login',
	component: login,
	meta: { 
		title: '用户登录' 
	}
}, {
	path: '/',
	component: home,
	meta: { 
		title: '自述文件' 
	},
	children: [{
		path: '/dashboard',
		component: dashboard,
		meta: { 
			title: '系统首页' 
		}
	}, {
		path: '/tabs',
		component: tabs,
		meta: { 
			title: 'tab选项卡' 
		}
	}, {
		path: '/expand_customer',
		component: expand_customer,
		meta: {
			title: '客户管理'
		}
	}, {
		path: '/expand_customerDetail',
		component: expand_customerDetail,
		meta: {
			title: '客户详情'
		}
	}, {
		path: '/expand_data',
		component: expand_data,
		meta: {
			title: '拓展管理'
		}
	}, {
		path: '/expand_dataDetail',
		component: expand_dataDetail,
		meta: {
			title: '拓展详情'
		}
	}]
}];

export let asyncRouterMap = [{
	path: '/',
	redirect: '/dashboard'
}, {
	path: '/login',
	component: login,
	meta: { 
		title: '用户登录' 
	}
}, {
	path: '/',
	component: home,
	meta: { 
		title: '自述文件' 
	},
	children: [{
		path: '/dashboard',
		component: dashboard,
		meta: { 
			title: '系统首页' 
		}
	}, {
		path: '/tabs',
		component: tabs,
		meta: { 
			title: 'tab选项卡' 
		}
	}, {
		path: '/expand_customer',
		component: expand_customer,
		meta: {
			title: '客户管理'
		}
	}, {
		path: '/expand_customerDetail',
		component: expand_customerDetail,
		meta: {
			title: '客户详情'
		}
	}, {
		path: '/expand_data',
		component: expand_data,
		meta: {
			title: '拓展管理'
		}
	}, {
		path: '/expand_dataDetail',
		component: expand_dataDetail,
		meta: {
			title: '拓展详情'
		}
	}]
}];

export const allRouterMap = [{
	path: '/',
	redirect: '/dashboard'
}, {
	path: '/',
	component: () => import('../components/common/Home.vue'),
	meta: { 
		title: '自述文件' 
	},
	children: [{
		path: '/dashboard',
		component: () => import('../components/page/Dashboard.vue'),
		meta: { 
			title: '系统首页' 
		}
	}, {
		path: '/tabs',
		component: tabs,
		meta: { 
			title: 'tab选项卡' 
		}
	}, {
		// 权限页面
		path: '/permission',
		component: () => import('../components/page/Permission.vue'),
		meta: { 
			title: '权限测试', 
			permission: true 
		}
	}, {
		path: '/404',
		component: () => import('../components/page/404.vue'),
		meta: { 
			title: '404' 
		}
	}, {
		path: '/403',
		component: () => import('../components/page/403.vue'),
		meta: { 
			title: '403' 
		}
	}]
}, {
	path: '/login',
	component: login,
	meta: { 
		title: '用户登录' 
	}
}, {
	path: '*',
	redirect: '/404'
}];

const createRouter = () => new Router({
	routes: constantRouterMap
})
const router = createRouter();

// 清空路由
export function resetRouter() {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher
}

export default router

/*
export default new Router({
	routes: constantRouterMap
});
*/
/*
export default new Router({
	routes: []
});
*/
export let createRoute = function(routes) {
	routes = JSON.parse(routes);
	let routeChild = routes.content;
	let routeArr = [];
	routeChild.forEach(item => {
		item.children.forEach(element => {
			routeArr.push({
				path: insertString(element.path),
				component: element.component,
				meta: {
					title: element.name
				}
			})
		})
	});
	routeArr = routeArr.map(item => {
		item = formatRoute(item);
		return item;
	});
	return routeArr;
};

const formatRoute = (item) => {
	let route = item;
	route.component = eval(item.component);
	return route;
}

function insertString (val) {
	let insertStr = `/${val}`;
	return insertStr;
}