import Vue from 'vue'
import App from './App'
import router from './router'

import QuantaUI from '../src'

Vue.config.productionTip = false

Vue.use(QuantaUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
