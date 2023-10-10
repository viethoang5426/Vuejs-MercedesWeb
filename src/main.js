import Vue from 'vue'
import TrangChu from './TrangChu.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(TrangChu)
}).$mount('#app')
