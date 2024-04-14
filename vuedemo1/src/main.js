import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router';
import axios from "axios";
// 引入iconfont图标
import "../src/assets/icon/iconfont.css"
import * as echarts from 'echarts';
// tools
// 引用lib-flexible插件
import './lib/lib-flexible'   //复制出来放在src文件夹下
//import 'lib-flexible'    //直接在node_modules中修改


axios.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('loginToken');
        if (token) {
            config.headers.token = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);




Vue.use(Element);
Vue.config.productionTip = false
Vue.prototype.$httpUrl = 'http://81.70.229.203:8888'
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
