import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入自己的图标
import './assets/fonts/iconfont.css'
// 引入全局样式表
import './assets/css/global.css'

import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table', TreeTable)
import axios from 'axios'
// 配置根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// http://127.0.0.1:8888/api/private/v1/
// http://timemeetyou.com:8889/api/private/v1/
// https://www.liulongbin.top:8888/api/private/v1/
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
