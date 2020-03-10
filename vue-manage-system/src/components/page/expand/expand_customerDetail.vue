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
				<el-tab-pane label="基本信息" name="0">
					<el-main class="el-border">
						<div class="el-main_title">统计数据</div>
						<div class="el-main_content">
							<div class="content-item border-right">
								<div class="item-title">站点线索</div>
								<div class="item-label">3</div>
							</div>
							<div class="content-item border-right">
								<div class="item-title">合同</div>
								<div class="item-label">3</div>
							</div>
							<div class="content-item border-right">
								<div class="item-title">站点</div>
								<div class="item-label">3</div>
							</div>
							<div class="content-item border-right">
								<div class="item-title">待回款金额</div>
								<div class="item-label">3</div>
							</div>
							<div class="content-item">
								<div class="item-title">待结算金额</div>
								<div class="item-label">3</div>
							</div>
						</div>
					</el-main>
					<el-main class="el-border" style="margin-top: 20px;">
						<div class="el-main_title">基础信息</div>
						<div class="el-main_content border-bottom">
							<ul class="content-ul">
								<li>
									<span>客户名称：</span>
									<p>张三丰</p>
								</li>
								<li>
									<span>客户星级：</span>
									<p class="rate_p">
										<el-rate v-model="rateValue" :disabled="true" :colors="colors" style="flex: 1;"></el-rate>
										<el-link :underline="false" icon="el-icon-edit-outline" @click="isChangeRate=true"></el-link>
									</p>
								</li>
								<li>
									<span>客户办公地址：</span>
									<p>科兴科学园B1栋102室</p>
								</li>
								<li>
									<span>所属区域：</span>
									<p>南部战区-深圳城市群-深圳-南山区</p>
								</li>
								<li>
									<span>客户手机号：</span>
									<p>15556788765</p>
								</li>
								<li>
									<span>客户类型：</span>
									<p>合伙人</p>
								</li>
								<li>
									<span>客户归属：</span>
									<p>刘全能</p>
								</li>
								<li>
									<span>创建时间：</span>
									<p>2020-02-02 15:33</p>
								</li>
								<li>
									<span>状态：</span>
									<p>已签约</p>
								</li>
							</ul>
						</div>
						<div class="el-main_title">其他信息</div>
						<div class="el-main_content border-bottom">
							<ul class="content-ul">
								<li>
									<span>客户行业：</span>
									<p>快递站点</p>
								</li>
								<li>
									<span>公司名称：</span>
									<p>顺丰速运</p>
								</li>
								<li>
									<span>客户职位：</span>
									<p>站长</p>
								</li>
								<li>
									<span>意向合作区域：</span>
									<p>南部战区-深圳城市群-深圳-南山区</p>
								</li>
								<li>
									<span>预估落地设备数量：</span>
									<p>合伙人</p>
								</li>
								<li>
									<span>商谈要点记录：</span>
									<p>刘全能</p>
								</li>
							</ul>
						</div>
						<div class="el-main_title">联系人</div>
						<div class="el-main_content border-bottom content-grid">
							<el-card shadow="hover">
								<div class="card-content">
									<div class="card-img"></div>
									<div class="card-user-info">
										<ul class="content-ul">
											<li>张思杰</li>
											<li>员工</li>
											<li>13811112222</li>
										</ul>
									</div>
								</div>
							</el-card>
							<el-card shadow="hover">
								<div class="card-content">
									<div class="card-img"></div>
									<div class="card-user-info">
										<ul class="content-ul">
											<li>张思杰</li>
											<li>员工</li>
											<li>13811112222</li>
										</ul>
									</div>
								</div>
							</el-card>
							<el-card shadow="hover">
								<div class="card-content">
									<div class="card-img"></div>
									<div class="card-user-info">
										<ul class="content-ul">
											<li>张思杰</li>
											<li>员工</li>
											<li>13811112222</li>
										</ul>
									</div>
								</div>
							</el-card>
							<el-card shadow="hover">
								<div class="card-content">
									<div class="card-img"></div>
									<div class="card-user-info">
										<ul class="content-ul">
											<li>张思杰</li>
											<li>员工</li>
											<li>13811112222</li>
										</ul>
									</div>
								</div>
							</el-card>
							<el-card shadow="hover">
								<div class="card-content">
									<div class="card-img"></div>
									<div class="card-user-info">
										<ul class="content-ul">
											<li>张思杰</li>
											<li>员工</li>
											<li>13811112222</li>
										</ul>
									</div>
								</div>
							</el-card>
							<el-card shadow="hover">
								<div class="card-content">
									<div class="card-img"></div>
									<div class="card-user-info">
										<ul class="content-ul">
											<li>张思杰</li>
											<li>员工</li>
											<li>13811112222</li>
										</ul>
									</div>
								</div>
							</el-card>
							<el-card shadow="hover">
								<div class="card-content">
									<div class="card-img"></div>
									<div class="card-user-info">
										<ul class="content-ul">
											<li>张思杰</li>
											<li>员工</li>
											<li>13811112222</li>
										</ul>
									</div>
								</div>
							</el-card>
						</div>
						<div class="el-main_title">银行信息</div>
						<div class="el-main_content">
							<ul class="content-ul">
								<li>
									<span>银行户名：</span>
									<p>张无忌</p>
								</li>
								<li>
									<span>开户行名称：</span>
									<p>招商银行科兴科学园分行</p>
								</li>
								<li>
									<span>银行账户：</span>
									<p>6217007200024678891</p>
								</li>
							</ul>
						</div>
					</el-main>
				</el-tab-pane>
				<el-tab-pane label="跟进记录" name="1">
					<el-main style="border: 1px solid #e9eaec;">
						<el-timeline>
							<el-timeline-item timestamp="2018/4/12" placement="top">
								<el-card shadow="hover">
									<div class="card-user-info" style="margin-left: 0px;">
										<ul class="content-ul">
											<li><h4>更新 Github 模板</h4></li>
											<li><p>王小虎 提交于 2018/4/3 20:46</p></li>
										</ul>
									</div>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/3" placement="top">
								<el-card shadow="hover">
									<div class="card-user-info" style="margin-left: 0px;">
										<ul class="content-ul">
											<li><h4>更新 Github 模板</h4></li>
											<li><p>王小虎 提交于 2018/4/3 20:46</p></li>
										</ul>
									</div>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/2" placement="top">
								<el-card shadow="hover">
									<div class="card-user-info" style="margin-left: 0px;">
										<ul class="content-ul">
											<li><h4>更新 Github 模板</h4></li>
											<li><p>王小虎 提交于 2018/4/3 20:46</p></li>
										</ul>
									</div>
								</el-card>
							</el-timeline-item>
						</el-timeline>
					</el-main>
				</el-tab-pane>
				<el-tab-pane label="拜访管理" name="2">
					<div class="search-content">
						<div class="search-input">
							<el-input placeholder='请输入内容' v-model="key" clearable>
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</div>
						<div class="search-btn">
							<el-button class="new-btn" type="primary">新建</el-button>
						</div>
					</div>
					<div class="table-content">
						<el-table :data="tableData" border stripe @cell-dblclick="goToDetail" @filter-change="filterHandler">
							<el-table-column align="center" prop="partnerId" label="ID"></el-table-column>
							<el-table-column align="center" prop="partnerName" label="名称"></el-table-column>
							<el-table-column align="center" prop="partnerType" label="类型" column-key="partnerType" :filters="this.partnerTypeDic" :filter-multiple="false">
								<template slot-scope="scope">
									<p>{{scope.row.partnerType | getPartnerType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" label="结算方式" >
								<template slot-scope="scope">
									<p>{{scope.row.settlementType | getProrationType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" label="操作" >
								<template slot-scope="scope">
									<el-button type="success" plain>详情</el-button>
									<el-button type="primary" samll>编辑</el-button>
									<el-button type="danger" samll>删除</el-button>
								</template>
							</el-table-column>
						</el-table>
						<div class="block">
							<el-pagination background @current-change="handleCurrentChange" :current-page.sync="nowPage" :page-size="20" layout="prev, pager, next, jumper" :page-count="totalPage"></el-pagination>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="合同管理" name="3">
					<div class="search-content">
						<div class="search-input">
							<el-input placeholder='请输入内容' v-model="key" clearable>
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</div>
						<div class="search-btn">
							<el-button class="new-btn" type="primary">新建</el-button>
						</div>
					</div>
					<div class="table-content">
						<el-table :data="tableData" border stripe @cell-dblclick="goToDetail" @filter-change="filterHandler">
							<el-table-column align="center" prop="partnerId" label="ID"></el-table-column>
							<el-table-column align="center" prop="partnerName" label="名称"></el-table-column>
							<el-table-column align="center" prop="partnerType" label="类型" column-key="partnerType" :filters="this.partnerTypeDic" :filter-multiple="false">
								<template slot-scope="scope">
									<p>{{scope.row.partnerType | getPartnerType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" label="结算方式" >
								<template slot-scope="scope">
									<p>{{scope.row.settlementType | getProrationType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" label="操作" >
								<template slot-scope="scope">
									<el-button type="success" plain>详情</el-button>
									<el-button type="primary" samll>编辑</el-button>
									<el-button type="danger" samll>删除</el-button>
								</template>
							</el-table-column>
						</el-table>
						<div class="block">
							<el-pagination background @current-change="handleCurrentChange" :current-page.sync="nowPage" :page-size="20" layout="prev, pager, next, jumper" :page-count="totalPage"></el-pagination>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="站点管理" name="4">
					<div class="search-content">
						<div class="search-input">
							<el-input placeholder='请输入内容' v-model="key" clearable>
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</div>
						<div class="search-btn">
							<el-button class="new-btn" type="primary">新建</el-button>
						</div>
					</div>
					<div class="table-content">
						<el-table :data="tableData" border stripe @cell-dblclick="goToDetail" @filter-change="filterHandler">
							<el-table-column align="center" prop="partnerId" label="ID"></el-table-column>
							<el-table-column align="center" prop="partnerName" label="名称"></el-table-column>
							<el-table-column align="center" prop="partnerType" label="类型" column-key="partnerType" :filters="this.partnerTypeDic" :filter-multiple="false">
								<template slot-scope="scope">
									<p>{{scope.row.partnerType | getPartnerType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" label="结算方式" >
								<template slot-scope="scope">
									<p>{{scope.row.settlementType | getProrationType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" label="操作" >
								<template slot-scope="scope">
									<el-button type="success" plain>详情</el-button>
									<el-button type="primary" samll>编辑</el-button>
									<el-button type="danger" samll>删除</el-button>
								</template>
							</el-table-column>
						</el-table>
						<div class="block">
							<el-pagination background @current-change="handleCurrentChange" :current-page.sync="nowPage" :page-size="20" layout="prev, pager, next, jumper" :page-count="totalPage"></el-pagination>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="管理员管理" name="5">
					<div class="search-content">
						<div class="search-input">
							<el-input placeholder='请输入内容' v-model="key" clearable>
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</div>
						<div class="search-btn">
							<el-button class="new-btn" type="primary">新建</el-button>
						</div>
					</div>
					<div class="table-content">
						<el-table :data="tableData" border stripe @cell-dblclick="goToDetail" @filter-change="filterHandler">
							<el-table-column align="center" prop="partnerId" label="ID"></el-table-column>
							<el-table-column align="center" prop="partnerName" label="名称"></el-table-column>
							<el-table-column align="center" prop="partnerType" label="类型" column-key="partnerType" :filters="this.partnerTypeDic" :filter-multiple="false">
								<template slot-scope="scope">
									<p>{{scope.row.partnerType | getPartnerType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" label="结算方式" >
								<template slot-scope="scope">
									<p>{{scope.row.settlementType | getProrationType}}</p>
								</template>
							</el-table-column>
							<el-table-column align="center" label="操作" >
								<template slot-scope="scope">
									<el-button type="success" plain>详情</el-button>
									<el-button type="primary" samll>编辑</el-button>
									<el-button type="danger" samll>删除</el-button>
								</template>
							</el-table-column>
						</el-table>
						<div class="block">
							<el-pagination background @current-change="handleCurrentChange" :current-page.sync="nowPage" :page-size="20" layout="prev, pager, next, jumper" :page-count="totalPage"></el-pagination>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="回款管理" name="6">
					
				</el-tab-pane>
				<el-tab-pane label="账单管理" name="7">
					
				</el-tab-pane>
			</el-tabs>
		</div>
		<el-dialog title="请选择用户星级" :visible.sync="isChangeRate" center width="35%">
			<el-form >
				<el-form-item>
					<el-rate class="rate_pop" v-model="changeRateValue" :colors="colors" @change="userRateHandler"></el-rate>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="isChangeRate=false">取 消</el-button>
				<el-button type="primary" :loading="isLoading" @click="">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	import {requestData} from '../../../utils/data.js';
	import '../../../assets/css/content.css';
	export default {
		name: 'expand_customerDetail',
		data() {
			return {
				message: 0,
				key: '',
				tableData: [],
				nowPage: null,
				isLoading: false,
				totalPage: 0,
				partnerTypeDic: Object.freeze([{
					text: '小绿人',
					value: '0'
				}, {
					text: '电动汽车物业',
					value: '1'
				}, {
					text: '安装商',
					value: '2'
				}, {
					text: '4S店',
					value: '3'
				}, {
					text: '车企',
					value: '4'
				}, {
					text: '自行车物业',
					value: '5'
				}, {
					text: '自行车站主',
					value: '6'
				}, {
					text: '代理商',
					value: '7'
				}]),
				partnerType: '',
				rateValue: 5,
				isChangeRate: false,
				changeRateValue: null,
				colors: ['#99A9BF', '#32b16c', '#32b16c']
			}
		},
		created() {
			this.getPartnerList(1);
		},
		mounted() {

		},
		watch: {
			isChangeRate: function(val) {
				this.changeRateValue = null;
				if (val == true) {
					this.changeRateValue = this.rateValue;
				}
			}
		},
		methods: {
			/**
			 * 获取合作伙伴列表
			 * @param  {Number} currentPage 当前页数
			 * @return {Array}             伙伴数组
			 */
			getPartnerList(currentPage) {
				let self = this;
				self.nowPage = currentPage;
				self.tableData = [];
				let postData = {
					num: 20,
					page: currentPage,
					key: self.key,
					partnerType: self.partnerType
				};
				/*
				this.$http({
					url: 'listPartner.json',
					method: 'GET',
					data: postData
				}).then(res => {
					self.tableData = res;
				})
				*/
				self.tableData = requestData.data;
			},
			goToDetail(item) {
				this.$router.push({
					path: '/base_cooperation_detail',
					query: {
						partnerId: item.partnerId
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
				self.partnerType = val[0];
				if (self.partnerType== null || self.partnerType == undefined) {
					self.partnerType = '';
				}
				self.getPartnerList(self.nowPage);
			},
			handleCurrentChange(val) {
				// this.getSalaryList(val);
			},
			tabPress(tab) {

			},
			userRateHandler(val) {
				console.log(val);
				this.changeRateValue = val;
			}
		},
		filters: {

		}
	}
</script>