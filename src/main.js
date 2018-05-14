import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Bootstrap from 'bootstrap'
import axios from 'axios'
import VueGoodTable from 'vue-good-table'

import Home from './components/Home.vue'
import signup from './components/signup.vue'
import signin from './components/signin.vue'
import appointments from './components/appointments.vue'
import addCompany from './components/addCompany.vue'
import aTable from './components/aTable.vue'
import addInfo from'./components/addInfo.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTable)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/signup', name: 'signup', component: signup },
  { path: '/signin', name: 'signin', component: signin },
  { path: '/appointments', name: 'appointments', component: appointments },
  { path: '/addCompany', name: 'addCompany', component: addCompany },
  { path: '/aTable', name: 'aTable', component: aTable },
  { path: '/addInfo', name: 'addInfo', component: addInfo }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
