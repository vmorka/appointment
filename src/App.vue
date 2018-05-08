<template>
  <div id="app">
    <div class="container">
    <router-view></router-view>
    </div>
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
