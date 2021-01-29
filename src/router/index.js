/*
 * @Author: your name
 * @Date: 2021-01-27 15:55:02
 * @LastEditTime: 2021-01-29 11:19:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qie-node-open/Users/zhangjian/practice/test-vue-cli/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
const router = new VueRouter({
    mode: 'history',
    routes
});
Vue.use(VueRouter);
export default router;

