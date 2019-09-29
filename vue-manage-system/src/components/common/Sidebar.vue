<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
		<!-- <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#3f3f3f" text-color="#ffffff" active-text-color="#79bd3b" unique-opened router> -->
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index" :key="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
								<template slot="title">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<i :class="item.icon"></i>
						<span slot="title">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
import bus from '../common/bus';
export default {
	data() {
		return {
			collapse: false,
			items: [{
				icon: 'el-icon-lx-home',
				index: 'dashboard',
				title: '系统首页'
			}, {
				icon: 'el-icon-coin',
				index: 'operation',
				title: '运营管理',
				subs: [{
					index: 'base_cooperation',
					title: '合作伙伴'
				}, {
					index: 'base_fee',
					title: '资费定义'
				}, {
					index: 'base_rule',
					title: '结算规则'
				}, {
					index: 'base_user',
					title: '用户管理'
				}, {
					index: 'base_chargeOrder',
					title: '充电订单'
				}, {
					index: 'base_rechargeMoney',
					title: '营收管理'
				}, {
					index: 'base_coupon',
					title: '月卡管理'
				}, {
					index: 'base_message',
					title: '用户反馈'
				}, {
					index: 'base_refund',
					title: '退补申请'
				}]
			}, {
				icon: 'el-icon-shopping-cart-full',
				index: 'presale',
				title: '售前管理',
				subs: [{
					index: 'presale_contract',
					title: '合同管理'
				}, {
					index: 'presale_send',
					title: '发货申请'
				}, {
					index: 'presale_online',
					title: '上线申请'
				}, {
					index: 'presale_siteSurvey',
					title: '站点勘察'
				}, {
					index: 'presale_electrician',
					title: '电工管理'
				}, {
					index: 'presale_order',
					title: '订货管理'
				}, {
					index: 'presale_reject',
					title: '退货管理'
				}, {
					index: 'presale_transfer',
					title: '迁移管理'
				}]
			}, {
				icon: 'el-icon-location',
				index: 'site',
				title: '站点管理',
				subs: [{
					index: 'site_station',
					title: '自行车充电站'
				}, {
					index: 'site_device',
					title: '设备管理'
				}, {
					index: 'site_module',
					title: '充电口'
				}, {
					index: 'site_meshModule',
					title: '无线中继'
				}, {
					index: 'site_simManage',
					title: 'sim卡管理'
				}]
			}, {
				icon: 'el-icon-bell',
				index: 'defend',
				title: '维护',
				subs: [{
					index: 'defend_warning',
					title: '告警管理'
				}, {
					index: 'defend_orderAnalys',
					title: '异常订单分析'
				}, {
					index: 'defend_hitchAnalys',
					title: '故障分析'
				}, {
					index: 'defend_upgrade',
					title: '升级任务'
				}, {
					index: 'defend_hardDevice',
					title: '硬件管理'
				}, {
					index: 'defend_maintance',
					title: '维修单'
				}, {
					index: 'defend_maintanceAnalys',
					title: '维修单分析'
				}, {
					index: 'defend_map',
					title: '上报地图'
				}, {
					index: 'defend_message',
					title: '消息记录'
				}, {
					index: 'defend_testOrder',
					title: '测试站订单'
				}]
			}, {
				icon: 'el-icon-s-finance',
				index: 'finance',
				title: '财务',
				subs: [{
					index: 'finance_carBill',
					title: '工单开票回款'
				}, {
					index: 'finance_installer',
					title: '安装商账单'
				}, {
					index: 'finance_4SBill',
					title: '4S店账单'
				}, {
					index: 'finance_stationBill',
					title: '站点账单'
				}, {
					index: 'finance_propertyBill',
					title: '物业账单'
				}, {
					index: 'finance_reward',
					title: '安装补贴'
				}, {
					index: 'finance_applyCash',
					title: '提现审核'
				}, {
					index: 'finance_liquidation_old',
					title: '财务清算表(旧)'
				}, {
					index: 'finance_liquidation',
					title: '财务清算表'
				}, {
					index: 'finance_commercial',
					title: '资产报表'
				}, {
					index: 'finance_ammeter',
					title: '抄表'
				}]
			}, {
				icon: 'el-icon-s-data',
				index: 'charts',
				title: '报表',
				subs: [{
					index: 'charts_bikeAnalys',
					title: '自行车分析'
				}, {
					index: 'charts_operationAnalys',
					title: '运营数据'
				}, {
					index: 'charts_carAnalys',
					title: '工单分析'
				}, {
					index: 'charts_managerAnalys',
					title: '业务员分析'
				}, {
					index: 'charts_mainAnalys',
					title: '公司业务分析'
				}]
			}, {
				icon: 'el-icon-s-marketing',
				index: 'performance',
				title: '绩效',
				subs: [{
					index: 'performance_analys',
					title: '绩效分析'
				}]
			}, {
				icon: 'el-icon-setting',
				index: 'system',
				title: '系统管理',
				subs: [{
					index: 'system_user',
					title: '操作员管理'
				}, {
					index: 'system_right',
					title: '权限管理'
				}]
			}, {
				icon: 'el-icon-lx-warn',
				index: '7',
				title: '错误处理',
				subs: [{
					index: 'permission',
					title: '权限测试'
				}, {
					index: '404',
					title: '404页面'
				}]
			}]
		};
	},
	computed: {
		onRoutes() {
			console.log(`侧边路由:${this.$route.path.replace('/', '')}`);
			return this.$route.path.replace('/', '');
		}
	},
	created() {
		// 通过 Event Bus 进行组件间通信，来折叠侧边栏
		bus.$on('collapse', msg => {
			this.collapse = msg;
			bus.$emit('collapse-content', msg);
		});
	}
};
</script>
<style scoped>
	.sidebar {
		display: block;
		position: absolute;
		left: 0;
		top: 70px;
		bottom: 0;
		overflow-y: scroll;
	}
	.sidebar::-webkit-scrollbar {
		width: 0;
	}
	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 170px;
	}
	.sidebar > ul {
		height: 100%;
	}
</style>
