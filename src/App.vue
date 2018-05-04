<template>
  <div id="app">
    <signup></signup>
    <signin></signin>
    <add-services></add-services>
    <home></home>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import signup from './components/signup.vue';
  import signin from './components/signin.vue';
  import addServices from './components/addServices.vue';

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
