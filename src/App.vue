<template>
  <div id="app">
    <reg-login></reg-login>
    <home></home>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import RegLogin from './components/RegLogin.vue';
  import signup from './components/signup.vue';

  export default {
    data () {
      return {

      }
    },
    components: {
      'home': Home,
      'reg-login': RegLogin,
      'signup': signup
    }
  }
</script>

<style>
</style>
