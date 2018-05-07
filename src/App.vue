<template>
  <div id="app">
    <div class="container">
      <router-link :to="{ name: 'signup' }" class="btn btn-info">Registruotis</router-link>
      <router-link :to="{ name: 'signin' }" class="btn btn-info">Prisijungti</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import signup from './components/signup.vue'
  import signin from './components/signin.vue'
  import appointments from './components/appointments.vue'
  import addServices from './components/addServices.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      'home': Home,
      'signup': signup,
      'signin': signin,
      'add-services': addServices
    }
  }
</script>

<style>
</style>
