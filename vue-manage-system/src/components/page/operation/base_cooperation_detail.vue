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
			<el-tabs v-model="message">
				<el-tab-pane label="基础资料" name="first">
					<ul class="tab-ul">
						<li class="firstItem">
							<h2>基础信息</h2>
						</li>
						<li>
							<h2>ID：</h2>
							<p>1234423</p>
							<el-link :underline="true" icon="el-icon-edit">编辑</el-link>
						</li>
						<li>
							<h2>名称：</h2>
							<p></p>
						</li>
						<li>
							<h2>类型：</h2>
							<p></p>
						</li>
						<li>
							<h2>结算周期：</h2>
							<p></p>
						</li>
						<li>
							<h2>分成方式：</h2>
							<p></p>
						</li>
						<li>
							<h2>度数分成：</h2>
							<p></p>
						</li>
						<li>
							<h2>4S店优惠：</h2>
							<p></p>
						</li>
						<li>
							<h2>公司主体：</h2>
							<p></p>
						</li>
						<li>
							<h2>优惠时间：</h2>
							<p></p>
						</li>
						<li>
							<h2>开户银行：</h2>
							<p></p>
						</li>
						<li>
							<h2>银行户名：</h2>
							<p></p>
						</li>
						<li>
							<h2>银行账户：</h2>
							<p></p>
						</li>
						<li>
							<h2>银行开户城市：</h2>
							<p></p>
						</li>
						<li>
							<h2>邮箱地址：</h2>
							<p></p>
						</li>
						<li>
							<h2>管理员：</h2>
							<p></p>
						</li>
						<li>
							<h2>管理员电话：</h2>
							<p></p>
						</li>
						<li>
							<h2>备注：</h2>
							<p></p>
						</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane label="充电站点" name="second">
					
				</el-tab-pane>
				<el-tab-pane label="月结单" name="third">
					
				</el-tab-pane>
				<el-tab-pane label="钱包" name="fourth">
					
				</el-tab-pane>
				<el-tab-pane label="管理员" name="fifth">
					
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'partnerDetail',
		data() {
			return {
				message: 'first',
				partnerId: this.$route.query.partnerId,
				partnerName: '',
				partnerDetail: '',
				baseDetail: ''
			}
		},
		created() {
			this.getPartnerDetail();
		},
		mounted() {

		},
		watch: {

		},
		methods: {
			getPartnerDetail() {
				let self = this;
				this.$http({
					url: 'findPartnerById.json',
					method: 'GET',
					data: {
						partnerId: self.partnerId
					}
				}).then(res => {
					// self.partnerDetail = res;
				})
			},
			getPartnerManagerInfo(base) {
				let self = this;
				this.$http({
					url: 'getPartnerManagerInfo.json',
					method: 'GET',
					data: {
						partnerId: self.partnerId
					}
				}).then(res => {
					self.partnerDetail.partnerId         = base.partnerId;
					self.partnerDetail.partnerName       = base.partnerName;
					self.partnerDetail.partnerType       = base.partnerType;
					self.partnerDetail.timeCycle         = base.timeCycle;
					self.partnerDetail.proration         = base.proration;
					self.partnerDetail.unit              = base.unit;
					self.partnerDetail.discountFlag      = base.discountFlag;
					self.partnerDetail.xlvrenType        = base.xlvrenType;
					self.partnerDetail.discountStartDate = base.discountStartDate;
					self.partnerDetail.bank              = base.bank;
					self.partnerDetail.bankCityName      = base.bankCityName;
					self.partnerDetail.bankUserName      = base.bankUserName;
					self.partnerDetail.bankAccount       = base.bankAccount;
					self.partnerDetail.email             = base.email;
					self.partnerDetail.username          = res.username;
					self.partnerDetail.userMobile        = res.userMobile;
					self.partnerDetail.comment           = base.comment;
				})
			} 
		}
	}
</script>