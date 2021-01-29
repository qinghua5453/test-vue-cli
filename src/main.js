/*
 * @Author: your name
 * @Date: 2021-01-26 16:48:58
 * @LastEditTime: 2021-01-27 16:47:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qie-node-open/Users/zhangjian/practice/test-vue-cli/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
