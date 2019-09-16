import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index"

import CYUI from "@lib"


// import '../mock/index.js'

Vue.config.productionTip = false
Vue.use(CYUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
