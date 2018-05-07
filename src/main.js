import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Bootstrap from 'bootstrap'
import axios from 'axios'

import Home from './components/Home.vue'
import signup from './components/signup.vue'
import signin from './components/signin.vue'
import appointments from './components/appointments.vue'
import addServices from './components/addServices.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(axios)
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/signup', name: 'signup', component: signup },
  { path: '/signin', name: 'signin', component: signin },
  { path: '/appointments', name: 'appointments', component: appointments },
  { path: '/addServices', name: 'addServices', component: addServices }
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
