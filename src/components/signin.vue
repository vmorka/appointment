<template>
  <div class="container">
    <form class="form-control">
      <legend>Prisijungimo duomenys</legend>
      <div class="form-group">
          <input
                  type="email"
                  name="email"
                  placeholder="El.paštas"
                  class="form-control"
                  v-model="email">
      </div>
      <div class="form-group">
          <input
                  type="password"
                  name="password"
                  placeholder="Slaptažodis"
                  class="form-control"
                  v-model="password">
      </div>
      <button type="submit" class="btn btn-info btn-lg" @click.prevent="signinClient">Prisijungti</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signinClient() {
        axios.post('http://192.168.123.107/api/user/signin',
          {email: this.email, password: this.password},
          {headers: {'X-Requested-With': 'XMLHttpRequest'}})
          .then(
            (response) => {
              const token = response.data.token;
              const base64Url = token.split('.')[1];
              const base64 = base64Url.replace('-', '+').replace('_', '/');
              console.log(JSON.parse(window.atob(base64)));
              localStorage.setItem('token', token);
            }
          )
          .catch(
            (error) => console.log(error)
          );
        this.$router.push({ path: '/appointments' });
      },
      signinCompany() {
        axios.post('http://192.168.123.107/api/company/signin',
          {email: this.email, password: this.password},
          {headers: {'X-Requested-With': 'XMLHttpRequest'}})
          .then(
            (response) => {
              const token = response.data.token;
              const base64Url = token.split('.')[1];
              const base64 = base64Url.replace('-', '+').replace('_', '/');
              console.log(JSON.parse(window.atob(base64)));
              localStorage.setItem('token', token);
            }
          )
          .catch(
            (error) => console.log(error)
          );
        this.$router.push({ path: '/appointments' });
      }
    }
  }
</script>

<style>
</style>
