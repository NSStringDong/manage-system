import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import {Message,Loading} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/theme-green/index.css'; // 浅绿色主题
// import './assets/css/theme/index.css'; // 小绿人主题色
import './assets/css/icon.css';
import 'babel-polyfill';
import * as filters from './fliters/index.js';
import * as dd from 'dingtalk-jsapi'
import md5 from 'js-md5';
// import {httpRequest} from './assets/js/httpRequest.js'
import {httpRequest} from './utils/httpRequest.js';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(ElementUI, {
    size: 'small'
});
Vue.prototype.$http = httpRequest;
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading;
Vue.prototype.$md5 = md5;

// 遍历filters，绑定到全局
Object.keys(filters).forEach((item) => {
    Vue.filter(item, filters[item]);
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = `${to.meta.title}`;
    const role = localStorage.getItem('token');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        next();
    }
    /*
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
    */
    // next();
});

new Vue({
    router,
    render: h => h(App),
    created() {
        // this.initDD();
    },
    methods: {
        initDD: function() {
            alert(`响应`);
            let self = this;
            alert(`requestAuthCode begin：ding74d9e13970803121a39a90f97fcb1e09`);
            dd.ready(function() {
                dd.runtime.permission.requestAuthCode({
                    corpId: 'ding74d9e13970803121a39a90f97fcb1e09',
                    onSuccess: function(result) {
                        alert(`requestAuthCode:${result.code}`);
                        self.dingTalkLogin(result.code);
                    },
                    onFail: function(err) {
                        alert(`鉴权接口失败`);
                    }
                })
            })
        },
        dingTalkLogin: function(authCode) {
            let self = this;
            let postData = {
                requestAuthCode: authCode
            };
            self.$http({
                url: 'auth/loginDingTalk',
                method: 'POST',
                data: postData
            }).then(res => {
                alert(res);
            })
        }
    }
}).$mount('#app');
