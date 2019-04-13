// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'lib-flexible'
Vue.use(VueBaiduMap.default, {
  ak: 'Ym7eQ6BTYKpIvGAPzEkq0sTWFcANBaun',
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
