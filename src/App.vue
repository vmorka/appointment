<template>
  <div id="app">
    <reg-login></reg-login>
    <home></home>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import RegLogin from './components/RegLogin.vue';

  export default {
    data () {
      return {

      }
    },
    components: {
      'home': Home,
      'reg-login': RegLogin
    }
  }
</script>

<style>
</style>
