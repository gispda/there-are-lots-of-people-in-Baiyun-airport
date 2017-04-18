/**
 * 全局配置
 */
import API from '@/api';
import constant from './constants';
import { unixToTime } from './formateDate';
import echarts from 'echarts'
import cookies from 'js-cookie';
import auth from './auth';

export default function plugin(Vue) {
    // api 全局注入
    Vue.prototype.$API = API;

    // 业务常量全局注入
    Vue.prototype.$const = constant;

    // echarts
    Vue.prototype.$echarts = echarts;

    // cookie
    Vue.prototype.$cookies = cookies;

    // 权限管理
    Vue.prototype.$auth = auth;

    // 注册全局过滤器
    Vue.filter('unixToTime', unixToTime);
}
