// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import 'lib-flexible'
Vue.use(VueBaiduMap.default, {
  ak: 'Ym7eQ6BTYKpIvGAPzEkq0sTWFcANBaun',
})

Vue.use(VueLazyload,{
  preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
  error: './static/error.png', // 当加载图片失败的时候
  loading: './static/error.png', // 图片加载状态下显示的图片
  attempt: 3 //  加载错误后最大尝试次数 默认值:3
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
