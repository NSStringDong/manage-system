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
	.picture-box {
		padding: 10px 20px;
		width: 100%;
	}
	.picture-box p {
		padding: 10px 0px;
		color: #d8d8d8;
		font-size: 14px;
	}
	.picture-content {
		display: grid !important;
    	grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    	gap: 10px;
    	/*padding: 20px;*/
    	/*width: 100%;*/
	}
	.picture-item {
		width: 100px;
	    height: 100px;
	    /*border-radius: 50%;*/
	    background-image: url('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');
	    background-repeat: none;
	    background-size: 100%;
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
				<el-tab-pane label="基础资料" name="0">
					<el-main class="el-border" style="margin-top: 20px;">
						<div class="el-main_title">基础信息</div>
						<div class="el-main_content border-bottom" style="border-top: 0px;">
							<ul class="content-ul">
								<li>
									<span>线索状态：</span>
									<p>{{stationClueInfo.clueStatusCode}}</p>
								</li>
								<li>
									<span>线索站点名称：</span>
									<p>{{stationClueInfo.clueStationName}}</p>
								</li>
								<li>
									<span>所属区域：</span>
									<p>{{stationClueInfo.regionCode}}</p>
								</li>
								<li>
									<span>站点地址：</span>
									<p>{{stationClueInfo.address}}</p>
								</li>
								<li>
									<span>站点类型：</span>
									<p>{{stationClueInfo.stationTypeCode}}</p>
								</li>
								<li>
									<span>联系方式：</span>
									<p>{{stationClueInfo.contact}}</p>
								</li>
								<li>
									<span>线索归属：</span>
									<p>{{stationClueInfo.regionCode}}</p>
								</li>
								<li>
									<span>车辆数量：</span>
									<p>{{stationClueInfo.carNumber}}</p>
								</li>
								<li>
									<span>骑手数量：</span>
									<p>{{stationClueInfo.riderNumber}}</p>
								</li>
								<li>
									<span>铅酸/锂电比例：</span>
									<p>{{stationClueInfo.batteryRatio}}</p>
								</li>
								<li>
									<span>电车/油车比例：</span>
									<p>{{stationClueInfo.carTypeRatio}}</p>
								</li>
								<li>
									<span>现有充电方式：</span>
									<p>{{stationClueInfo.currentChargingWay}}</p>
								</li>
								<li>
									<span>资费(单次)：</span>
									<p>{{stationClueInfo.feeOnce}}</p>
								</li>
								<li>
									<span>资费(包月)：</span>
									<p>{{stationClueInfo.feeMonthly}}</p>
								</li>
								<li>
									<span>状态：</span>
									<p>{{stationClueInfo.regionCode}}</p>
								</li>
							</ul>
						</div>
						<div class="el-main_title">关联客户信息</div>
						<div class="el-main_content border-bottom">
							<ul class="content-ul">
								<li>
									<span>客户名称：</span>
									<p>{{stationContactInfo.clientName}}</p>
								</li>
								<li>
									<span>客户手机号：</span>
									<p>{{stationContactInfo.clientMobile}}</p>
								</li>
							</ul>
						</div>
						<div class="el-main_title">拜访现场照片</div>
						<div class="el-main_content">
							<div class="picture-box">
								<h4>1、场景</h4>
								<p>2019-12-12 11：00</p>
								<div class="picture-content">
									<div class="picture-item">
										
									</div>
									<div class="picture-item">
										
									</div>
									<div class="picture-item">
										
									</div>
									<div class="picture-item">
										
									</div>
								</div>
								<p>广东省深圳市南山区粤海街道科兴科学园</p>
							</div>
						</div>
					</el-main>
				</el-tab-pane>
				<el-tab-pane label="跟进动态" name="1">
					<el-main style="border: 1px solid #e9eaec;">
						<el-timeline>
							<el-timeline-item v-for="item in visitList" :timestamp="item.operationDate" :key="item.id" placement="top">
								<el-card shadow="hover">
									<div class="card-user-info" style="margin-left: 0px;">
										<ul class="content-ul">
											<li><h4>{{item.operatorName}}</h4></li>
											<li><p>{{item.traceDesc}}</p></li>
										</ul>
									</div>
								</el-card>
							</el-timeline-item>
						</el-timeline>
					</el-main>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script>
	import '../../../assets/css/content.css';
	export default {
		name: 'expand_dataDetail',
		data() {
			return {
				message: 0,
				tabList: [false, false],
				stationClueId: this.$route.query.stationClueId,
				stationClueInfo: Object,
				stationContactInfo: {
					clientName: '', 			// 客户名称
					clientMobile: ''			// 客户联系电话
				},
				visitList: []
			}
		},
		created() {
			this.getstationClueInfo();
		},
		mounted() {

		},
		watch: {

		},
		methods: {
			/**
			 * 查询线索详情
			 * @return {Object} 详情
			 */
			getstationClueInfo() {
				let self = this;
				let postData = {
					id: self.stationClueId
				};
				self.$http({
					url: 'develop/api/clue/station/find',
					method: 'GET',
					data: postData
				}).then(res => {
					if (res.errorCode >= 0) {
						self.stationClueInfo = res.data;
						self.getCustomerDetail(res.data.clientId);
						self.getStationClueImageList();
					} else {
						self.$message({
							showClose: true,
							message: res.msg,
							type: 'error'
						});
					}
				})
			},
			getCustomerDetail(clientId) {
				let self = this;
				let postData = {
					id: clientId
				};
				self.$http({
					url: 'develop/api/clue/client/find',
					method: 'GET',
					data: postData
				}).then(res => {
					if (res.errorCode >= 0) {
						if (res.data) {
							self.stationContactInfo.clientName = res.data.clientName;
							self.stationContactInfo.clientMobile = res.data.clientMobile;
						} else {
							self.$message({
								showClose: true,
								message: `暂无数据`,
								type: 'error'
							});
						}
					} else {
						self.$message({
							showClose: true,
							message: res.msg,
							type: 'error'
						});
					}
				})
			},
			getStationClueImageList() {
				let self = this;
				let postData = {
					clueId: self.stationClueId
				};
				self.$http({
					url: 'develop/api/clue/station/findImageList/',
					method: 'GET',
					data: postData
				}).then(res => {
					
				})
			},
			/**
			 * 查询线索跟进动态
			 * @return {Array} 动态记录
			 */
			getStationClueRecordList() {
				let self = this;
				let postData = {
					clueTypeCode: 1,
					relationId: self.stationClueId
				};
				self.$http({
					url: 'develop/api/clue/track/list',
					method: 'GET',
					data: postData
				}).then(res => {
					if (res.errorCode >= 0) {
						self.visitList = res.data;
					} else {
						self.$message({
							showClose: true,
							message: res.msg,
							type: 'error'
						});
					}
				})
			},
			tabPress(tab) {
				console.log(tab.index);
				if (tab.index == 1) {
					this.getStationClueRecordList();
				}
			} 
		}
	}
</script>