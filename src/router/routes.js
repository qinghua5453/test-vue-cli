/*
 * @Author: your name
 * @Date: 2021-01-27 15:54:57
 * @LastEditTime: 2021-01-29 10:09:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qie-node-open/Users/zhangjian/practice/test-vue-cli/src/router/routes.js
 */
// const about  = () => require('../view/about.vue');
// const my = () => require('../view/my.vue');
import about from '../view/about.vue';
import my from '../view/my.vue';

let routes = [
    {
      path: '/about',
      component: about,
    },
    {
      path: '/my',
      component: my,
    }
];
export default routes;