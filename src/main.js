import Vue from 'vue'
import FastClick from 'fastclick'
import router from '@/router/index'
import setRem from '@/assets/scripts/utils/setRem'
import App from './App'

import './assets/fonts/iconfont.css'   // 引用iconfont文件

FastClick.attach(document.body)   // 解决移动端点击问题

setRem(document, window)  // 设置html字号

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
