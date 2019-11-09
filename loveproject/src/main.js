// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App.vue'

//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入自己的router.js
import router from './router/router.js'
var vm=new Vue({
  el: '#app',
  render:c=>c(app),
  router,
 
})
