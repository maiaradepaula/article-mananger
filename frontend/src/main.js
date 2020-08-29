import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1haWFyYSBWZWxvem8iLCJlbWFpbCI6Im1haWFyYXZlbG96b0Bob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1OTg3MzU4MTAsImV4cCI6MTU5ODk5NTAxMH0.x8puJxfDxSUVqdBxVvygh0lTu6ABCgGZXxYA894R2kE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')