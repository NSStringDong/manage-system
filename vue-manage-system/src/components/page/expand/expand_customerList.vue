<style>
	.search-content {
		/*height: 92px;*/
		padding-top: 15px;
		display: flex;
	}
	.search-input {
		width: 35%;
		/*margin-left: 16px;*/
		flex: 60px;
	}
	.search-btn {
		width: 60%;
		/*flex: 1;*/
	}
	.new-btn {
		/*margin-right: 16px;*/
		float: right;
	}
	.table-content {
		margin-top: 25px;
	}
</style>
<template>
	<div class="list-content">
		<div class="top-break">
			<!-- <el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{path: '/base_cooperation'}">{{`合作伙伴`}}</el-breadcrumb-item>
				<el-breadcrumb-item>
					<template>
						<p v-text="partnerName"></p>
					</template>
				</el-breadcrumb-item>
			</el-breadcrumb> -->
			<el-tabs v-model="message" @tab-click="tabPress">
				<el-tab-pane label="客户列表" name="0">
					<div class="search-content">
						<div class="search-input">
							<el-input placeholder='请输入内容' v-model="key" clearable>
								<el-button slot="append" icon="el-icon-search" @click="getCustomerList(0)"></el-button>
							</el-input>
						</div>
						<div class="search-btn">
							<!-- <el-button class="new-btn" type="primary">新建</el-button> -->
						</div>
					</div>
					<div class="table-content">
						<el-table :data="tableData" border stripe @cell-dblclick="goToDetail" @filter-change="filterHandler">
							<el-table-column align="center" prop="clientName" label="客户名称"></el-table-column>
							<el-table-column align="center" prop="clientTypeCode" label="客户类型" column-key="clueStatusCode" :filters="this.customerTypeDic" :filter-multiple="false">
								<template slot-scope="scope">
									<p>{{scope.row.clientTypeCode | expandCustomType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" prop="clueStatusCode" label="客户状态" column-key="clueStatusCode" :filters="this.customerStatusDic" :filter-multiple="false">
								<template slot-scope="scope">
									<p>{{scope.row.clueStatusCode | expandCustomStatus}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" prop="estimateDeviceNumber" label="预估设备数"></el-table-column>
							<el-table-column align="center" label="操作" >
								<template slot-scope="scope">
									<el-button type="success" plain @click="goToDetail(scope.row)">详情</el-button>
									<!-- <el-button type="primary" samll>编辑</el-button> -->
									<el-button type="danger" samll>删除</el-button>
								</template>
							</el-table-column>
						</el-table>
						<div class="block">
							<el-pagination background @current-change="handleCurrentChange" :current-page.sync="nowPage" :page-size="20" layout="prev, pager, next, jumper" :page-count="totalPage"></el-pagination>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="客户分析" name="1">
					
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script type="text/javascript">
	// import {requestData} from '../../../utils/data.js';
	export default {
		name: 'expand_customer',
		data() {
			return {
				message: 0,
				key: '',
				tableData: [],
				nowPage: null,
				totalPage: 0,
				customerTypeDic: Object.freeze([{
					text: '合伙人或合作方',
					value: '3001'
				}, {
					text: '政府人员',
					value: '3002'
				}, {
					text: '物业公司人员',
					value: '3003'
				}, {
					text: '快递公司人员',
					value: '3004'
				}, {
					text: '外卖公司人员',
					value: '3005'
				}, {
					text: '其他',
					value: '3006'
				}]),
				customerType: '',
				customerStatusDic: Object.freeze([{
					text: '待指派',
					value: '1001'
				}, {
					text: '待跟进',
					value: '1002'
				}, {
					text: '洽谈中',
					value: '1003'
				}, {
					text: '已签约',
					value: '1004'
				}, {
					text: '关闭',
					value: '1005'
				}]),
				customerStatus: ''
			}
		},
		created() {
			this.getCustomerList(0);
		},
		mounted() {

		},
		watch: {

		},
		methods: {
			/**
			 * 获取合作伙伴列表
			 * @param  {Number} currentPage 当前页数
			 * @return {Array}             伙伴数组
			 */
			getCustomerList(currentPage) {
				let self = this;
				self.nowPage = currentPage;
				self.tableData = [];
				let postData = {
					blurry: self.key,
					size: 20,
					page: currentPage,
					clueStatusCode: self.customerStatus
				};
				
				this.$http({
					url: 'develop/api/clue/client/query/list',
					method: 'GET',
					data: postData
				}).then(res => {
					if (res.errorCode >= 0) {
						self.tableData = res.data.content;
						self.totalPage = /*res.totalElements % 20;*/Math.ceil(res.data.totalElements / 20);
					} else {
						self.$message({
							showClose: true,
							message: res.msg,
							type: 'error'
						});
					}
				})
			},
			goToDetail(item) {
				this.$router.push({
					path: '/expand_customerDetail',
					query: {
						customerId: item.id
					}
				})
			},
			filterHandler(filters) {
				let self = this;
				let row = null;
				let val = null;
				for(const i in filters) {
					row = i;
					val = filters[i];
				}
				console.info('value:'+row);
                if (row == 'clueStatusCode') {
                    // 客户状态
                    self.customerStatus = val[0];
					if (self.customerStatus== null || self.customerStatus == undefined) {
						self.customerStatus = '';
					}
                } else if (row == 'clientTypeCode') {
                	// 客户类型
                	self.customerType = val[0];
					if (self.customerType== null || self.customerType == undefined) {
						self.customerType = '';
					}
                }
				self.getCustomerList(self.nowPage);
			},
			handleCurrentChange(val) {
				this.getCustomerList(val);
			},
			tabPress(tab) {
				console.log(tab.index);
				if (tab.index == 1) {
					this.getCustomerList(1);
				}
			}
		},
		filters: {

		}
	}
</script>