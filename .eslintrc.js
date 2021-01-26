/*
 * @Author: your name
 * @Date: 2021-01-26 17:06:33
 * @LastEditTime: 2021-01-26 17:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qie-node-open/Users/zhangjian/practice/test-vue-cli/.eslintrc.js
 */
module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: 'babel-eslint'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
  