import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import bootstrap from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(bootstrap);

new Vue({
  el: '#app',
  render: h => h(App)
})
