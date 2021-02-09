import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router";

Vue.config.productionTip = false
console.log('router', router);
console.log('store', store);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
