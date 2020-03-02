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
						<!-- <div class="el-main_title">基础信息</div> -->
						<div class="el-main_content border-bottom" style="border-top: 0px;">
							<ul class="content-ul">
								<li>
									<span>客户名称：</span>
									<p>张三丰</p>
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
						<div class="el-main_title">关联客户信息</div>
						<div class="el-main_content border-bottom">
							<ul class="content-ul">
								<li>
									<span>客户名称：</span>
									<p>张三丰</p>
								</li>
								<li>
									<span>客户手机号：</span>
									<p>15556788765</p>
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
	</div>
</template>
<script>
	export default {
		name: 'partnerDetail',
		data() {
			return {
				message: 0,
				tabList: [false, false]
			}
		},
		created() {
			
		},
		mounted() {

		},
		watch: {

		},
		methods: {
			tabPress(tab) {
				console.log(tab.name);
			} 
		}
	}
</script>