<template>
	<div class="login-wrap">
		<div class="ms-login">
			<el-card class="box-card">
				<!-- <img :src="login_url" class="image"> -->
				<div class="ms-title">小绿人后台管理系统</div>
				<div>
					<el-form :model="loginData" :rules="loginRule" ref="loginForm" status-icon label-width="100px" class="demo-ruleForm">
						<el-form-item prop="username">
							<el-input placeholder="手机号/账户名" v-model="loginData.username" prefix-icon="el-icon-edit" autocomplete="off">
							</el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input type="password" placeholder="密码" v-model="loginData.password" prefix-icon="el-icon-edit" autocomplete="off">  
							</el-input>
						</el-form-item>
						<div class="remeberCheck">
							<el-checkbox style="margin-left:0px;">记住我</el-checkbox>
							<span class="forgetPsd">
								<a href="javascript:void(0)">忘记密码？</a>
							</span>
						</div>
						
						<el-button type="primary" :disabled="isDisable" @click="loginIn">登录</el-button>
						
						<div class="remeberCheck" style="padding-top: 10px;">
							<!-- <el-checkbox style="margin-left:0px;">记住我</el-checkbox> -->
							<span class="forgetPsd">
								<a href="javascript:void(0)">注册账户</a>
							</span>
						</div>
					</el-form>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {menuData} from '../../utils/mockData.js';
	// import router from '../../router/index.js';
	import router, {constantRouterMap, asyncRouterMap, createRoute} from '../../router/index.js';
	export default {
		name: 'login',
		data: function(){
			var validateUser = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入账户'));
					this.isDisable = true;
				} else {
					if (this.loginData.password !== '') {
						this.$refs.loginForm.validateField('password');
					}
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
					this.isDisable = true;
				}else if (value.length < 6) {
					callback(new Error('密码不得小于六位'));
					this.isDisable = true;
				} else {
					this.isDisable = false;
					callback();
				}
			};
			return {
				loginData: {
					username: '',
					password: ''
				},
				loginRule: {
					username: [
						{ validator: validateUser, trigger: 'blur' }
					],
					password: [
						{ validator: validatePass, trigger: 'blur' }
					]
				},
				isDisable: true
				// login_url: loginHeaderImg
			}
		},
		created() {

		},
		methods: {
			loginIn() {
				let self = this;
				let pwdString = this.$md5(self.loginData.password);
				this.$store.dispatch('Login', this.loginData).then(() => {
					self.getUserMenus();
					this.$message.success('登录成功');
					this.$router.replace({
						path: '/dashboard'
					})
				})
				/*
				this.$http({
					url: "xlradmin/auth/loginWithoutCode",
					method: 'POST',
					data: {
						username: self.loginData.username,
						password: self.loginData.password
					}
				}).then((res) => {
					console.info('login', res);
					if (res) {
						this.$message.success('登录成功');
						localStorage.setItem('token', res.token);
						localStorage.setItem('username', res.user.username);
						self.getUserMenus();
					}
				})
				*/
			},
			getUserMenus() {
				localStorage.setItem('menu', JSON.stringify(menuData));
				// 创建路由
				// let menu = localStorage.getItem('menu');
				let newRoute = createRoute(JSON.stringify(menuData));
				console.info('route', newRoute);
				// 每次从静态路由表拼接
				let finalRoute = constantRouterMap[2].children.concat(newRoute);
				// console.info('finalRoute', finalRoute);
				// 拼接完成后给到动态路由表
				asyncRouterMap[2].children = finalRoute;
				console.info('asyncRouterMap', asyncRouterMap);
				router.addRoutes(asyncRouterMap);
				this.$router.replace({
				    path: '/dashboard'
				})

				// this.$http({
				// 	url: 'xlradmin/api/menus/build',
				// 	method: 'GET',
				// 	data: ""
				// }).then(res => {
					
				// })
			}
		}
	};
</script>

<style scoped>
	.login-wrap{
		position: relative;
		width:100%;
		height:100%;
		/*background-image: url(../../assets/login-bg.jpg);*/
		text-align: center;
		vertical-align: middle;
		background: #f3f3f3;
		background-image: url(../../assets/img/login-bg.jpg);
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.ms-login {
		width: 380px;
		height: 420px;
		margin: auto;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		position: absolute;
	}
	.ms-title {
		width: 100%;
		/*line-height: 50px;*/
		text-align: center;
		font-size: 24px;
		/*color: rgb(90, 174, 114);*/
		color: #32B16C;
		font-weight: border;
		/*border-bottom: 1px solid #ddd;*/
	}
	.clearfix {
		/*background: url(../assets/imgs/login.png);*/
	}
	.el-input{
		margin-top: 22px;
	}
	.el-checkbox {
		float: left;
	}
	.remeberCheck {
		width: 100%;
		height: 20px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.forgetPsd {
		float: right;
		height: 19px;
		line-height: 19px;
	}
	.forgetPsd a {
		font-size: 14px;
		color: #409eff;
	}
	.forgetPsd a:hover{
		text-decoration: underline;
	}
	.el-button {
		width: 100%;
	}
	.el-form-item {
		margin-bottom: 0px;
	}
	.box-card>>>.el-form-item div {
		margin-left: 0px !important; 
	}
</style>