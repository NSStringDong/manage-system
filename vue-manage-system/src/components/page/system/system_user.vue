<style scoped>
	.el-input,.el-select {
	    width: 320px;
	}
</style>
<template>
	<div class="list-content">
		<div class="search-content">
			<div class="search-input">
				<el-input placeholder='请输入员工姓名查询' v-model="key" clearable>
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</div>
			<div class="search-btn">
				<el-button class="new-btn" type="primary" @click="isNew=true">新增人员</el-button>
			</div>
		</div>
		<div class="table-content">
			<el-table :data="tableData" border stripe @cell-dblclick="goToDetail" @filter-change="filterHandler">
				<el-table-column align="center" prop="partnerId" label="ID"></el-table-column>
				<el-table-column align="center" prop="partnerName" label="姓名"></el-table-column>
				<el-table-column align="center" prop="mobile" label="手机号"></el-table-column>
				<el-table-column align="center" prop="mobile" label="用户类型"></el-table-column>
				<el-table-column align="center" prop="mobile" label="归属公司"></el-table-column>
				<el-table-column align="center" prop="addDate" label="添加时间"></el-table-column>
				<el-table-column align="center" label="操作" >
					<template slot-scope="scope">
						<el-button type="text" icon="el-icon-view" @click="goToDetail(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-dialog title="新增用户" :visible.sync="isNew" center width="35%">
				<el-form >
					<el-form-item label="姓名" :label-width="formLabelWidth">
						<el-input autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="手机号" :label-width="formLabelWidth">
						<el-input autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="用户类型" :label-width="formLabelWidth">
						<el-select v-model="partnerType" placeholder="请选择">
							<el-option v-for="item in partnerTypeDic" :key="item.value" :label="item.text" :value="item.value"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="归属" :label-width="formLabelWidth">
						<el-input autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" :label-width="formLabelWidth">
						<el-input autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="isNew=false">取 消</el-button>
					<el-button type="primary" @click="createNewUser">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'system_user',
		data() {
			return {
				key: '',
				tableData: [],
				nowPage: null,
				searchDate: '',
				formLabelWidth: '80px',
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
				isNew: false
			}
		},
		created() {
			this.getPartnerList(1);
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
				self.tableData = [];
			},
			goToDetail(item) {
				
			},
			createNewUser() {

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
			}
		},
		filters: {

		}
	}
</script>