import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


//test
new Vue({
  render: h => h(App)
}).$mount('#app')