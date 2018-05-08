<template>
  <div id="app">
    <div class="container">
      <h1>Appointment App</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import signup from './components/signup.vue'
  import signin from './components/signin.vue'
  import appointments from './components/appointments.vue'
  import addCompany from './components/addCompany.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      'home': Home,
      'signup': signup,
      'signin': signin,
      'add-company': addCompany,
      'appointments': appointments
    }
  }
</script>

<style>
h1 {
  padding: 30px;
}
</style>
