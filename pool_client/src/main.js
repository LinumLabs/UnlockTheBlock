import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
