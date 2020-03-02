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
	.el-main_title {
		padding: 10px 20px;
		background: #f0f0f0;
		color: #32b16c;
	}
	.el-main_content {
		display: flex;
		/*width: 100%;*/
		border-top: 1px solid #e9eaec;
		/*border-bottom: 1px solid #e9eaec;*/
	}
	.content-item {
		flex: 1;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
	.item-title {
		width: 100%;
		padding: 40px 0px;
	}
	.item-label {
		padding: 0px 0px 40px;
		font-size: 26px;
		font-weight: bolder;
	}
	.border-right {
		border-right: 1px solid #e9eaec;
	}
	.border-bottom {
		border-bottom: 1px solid #e9eaec;
	}
	.content-ul {
		width: 100%;
		font-size: 14px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.content-ul li {
		padding: 10px 20px;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
	.content-ul li span {
		/*display: inline-block;*/
		color: #d8d8d8;
		/*width: 150px;*/
		flex: 0.2;
	}
	.content-ul li p {
		/*width: 400px;*/
		flex: 1;
	}
	.rate_p {
		display: inline-flex; 
		align-items: center;
	}
	.el-card__body {
		padding: 0px !important;
	}
	.card-content {
		display: flex;
		padding: 10px;
		align-items: center;
		height: 120px;
	}
	.content-grid {
		display: grid !important;
		grid-template-columns: repeat(auto-fit,minmax(245px,1fr));
		gap: 10px;
		padding: 20px;
	}
	.card-img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-image: url('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');
		background-repeat: none;
		background-size: 100%;
	}
	.card-user-info {
		margin-left: 20px;
		display: flex;
	}
	.rate_pop {
		height: 40px !important;
		line-height: 40px !important;
		text-align: center;
	}
	.rate_pop span {
		width: 40px;
		height: 40px;
	}
	.rate_pop span i {
		width: 40px;
		height: 40px;
		font-size: 40px;
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
				<el-tab-pane label="拓展任务管理" name="0">
					<div class="search-content">
						<el-select v-model="value" placeholder="请选择战区">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
						<el-select v-model="value" placeholder="请选择城市群">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
						<el-select v-model="value" placeholder="请选择子城市">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
						<el-select v-model="value" placeholder="请选择区县">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
						<el-select v-model="value" placeholder="请选择街道">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
						<el-select v-model="value" placeholder="请选择社区">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</div>
					<div class="search-content">
						<div class="search-input">
							<el-input placeholder='请输入内容' v-model="key" clearable>
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</div>
						<div class="search-btn">
							<!-- <el-button class="new-btn" type="primary">新建</el-button> -->
							<el-button class="new-btn" type="primary" @click="isReport=true">导入数据</el-button>
							<el-button class="new-btn" style="margin-right: 10px;" type="primary" @click="downloadExcel">下载模板</el-button>
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
									<el-button type="success" @click="goToDetail(scope.row)" plain>详情</el-button>
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
				<el-tab-pane label="拓展区域管理" name="1">
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
			</el-tabs>
		</div>
		<el-dialog title="导入数据" :visible.sync="isReport" center width="480px">
			<el-form>
				<el-form-item label="导入文件">
					<el-input style="width: 220px;"readonly v-model="input" placeholder="选择文件"></el-input>
					<el-button style="margin-left: 30px;" type="primary" @click="uploadExcel">选取文件</el-button>
					<form method="post" enctype="multipart/form-data" ref="file_upload" id="file_upload" v-show="false">
						<input type="file" ref="upload" @change="tirggerFile($event)" name="refundXls" id="upload">
					</form>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancelExport" :disabled="isLoading">取 消</el-button>
				<el-button type="primary" :loading="isLoading" @click="reportLog">导 入</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	import {requestData} from '../../../utils/data.js';
	import axios from 'axios';
	let fileDownload = require('js-file-download');
	export default {
		name: 'base_cooperation',
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
				isReport: false,
				input: '',
				chooseValue: Object,
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: ''
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
			},
			'isReport': function(val) {
				let self = this;
				if (val == false) {
					document.getElementById('file_upload').reset();
					// self.$refs['file_upload'][0].reset();
					self.input = '';
					self.chooseValue = new Object();
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
					path: '/expand_dataDetail',
					query: {
						// partnerId: item.partnerId
					}
				})
			},
			downloadExcel() {
				/*
				axios.get(`${this.baseUrl}salary/exportSalary.do?date=${this.finalDate}`,
				{
					headers:{
						'token': window.localStorage.getItem('token')
					},
					responseType: 'arraybuffer'
				}).then((res) => {
					let self = this;
					console.log(res);
					if (res.status == 200) {
						let status = res.headers['status'];
						if (status == -1) {
							self.$message({
								showClose: true,
								message: `导出失败`,
								type: 'error'
							});
						} else if (status == 1) {
							let fileName = res.headers['content-disposition'].split('filename=')[1];
  							fileDownload(res.data,decodeURI(fileName));
  							self.$message.success(`导出成功`);
						}
					} else {
						this.$message({
							message: `导出失败`,
							type: 'error'
						});
					}
				})
				*/
			},
			uploadExcel() {
				this.$refs.upload.click();
			},
			tirggerFile(event) {
				console.log(event.target.files);
				// this.input = '';
				this.chooseValue = event;
				this.input = event.target.files[0].name;
				this.chooseValue = event;
			},
			reportLog() {
				let self = this;
				if (!this.chooseValue.target) {
					this.$message({
						type: 'warning',
						message: `请选择文件`
					})
				} else {
					this.isLoading = true;
					console.log(this.chooseValue.target.files[0]);
					let chooseFile = new FormData();
					chooseFile.append('file',this.chooseValue.target.files[0]);
					// chooseFile.append('date',this.finalLogDate);
					let url = '';
					axios.post(url,
					chooseFile,{
						headers:{
							"Content-Type": "multipart/form-data",
							'token': window.localStorage.getItem('token')
						}
					}).then((res) => {
						console.log(res);
						this.isReport = false;
						this.isLoading = false;
						if (res.status == 200) {
							// console.log(`接口成功`);
							if (res.data.errorCode >= 0) {
								setTimeout(() => {
									this.$message.success(`导入成功`);
								}, 1000);
								// self.getAllSalaryList(1);
							} else {
								// console.log(`失败`);
								this.$message({
									showClose: true,
									message: res.data.msg,
									type: 'error'
								});
							}
						} else {
							// this.$message.success(`导入失败`);
							this.$message({
								message: `导入失败`,
								type: 'error'
							});
						}
					})
				}
			},
			cancelExport() {
				this.isReport = false;
				this.$message({
                    type: 'info',
                    message: `放弃操作`
                });
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