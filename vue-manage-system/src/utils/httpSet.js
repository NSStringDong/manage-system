import {axiosConfig} from 'httpConfig.js'
import axios from 'axios'
import {Message} from 'element-ui'

const httpSet = axios.create({
	baseURL: axiosConfig.baseUrl,
	timeout: axiosConfig.timeout
});

// 设置使用cookies
httpSet.defaults.withCredentials = true;

httpSet.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

httpSet.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';

httpSet.defaults.responseType = 'json';

httpSet.defaults.transformRequest = [
	function(data) {
		// 数据序列化
		return JSON.stringify(data);
	}
];

httpSet.defaults.validataStatus = function (status) {
	return true;
};

// 配置请求头信息
httpSet.interceptors.request.use(
	config => {
		config.headers.Accept = 'application/json';
		return config;
	},
	error => {
		this.$message.error(error);
		Promise.reject(error);
	}
);

// response拦截器=>对响应做处理
httpSet.interceptors.response.use(
	function (response) {
		// 成功请求到数据
		// 根据返回的数据做对应的处理
		if (response.status == 200) {
			const data = response.data;
			if (data.errorCode >= 0) {
				return data;
			} else if (data.errorCode == -100) {
				Message({
					showClose: true,
					message: data.msg,
					type: 'error'
				});
			} else {
				Message({
					showClose: true,
					message: data.msg,
					type: 'error'
				});
			}
		} else {
			console.info(`请求返回：${JSON.stringify(response)}`);
			const err = new Error();
			err.data = response.data;
			err.response = response;
			throw err;
		}
	},
	function (error) {
		console.log(`执行error`);
		console.info(error);
		console.info(JSON.stringify(error));

		if (error && error.response) {
			switch (error.response.status) {
				case label_1:
					// statements_1
					break;
				default:
					// statements_def
					break;
			}
		}
	}
)