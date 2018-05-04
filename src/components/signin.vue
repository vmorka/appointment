<template>
  <div>
    <div class="dropdown login-right">
      <button class="btn btn-info btn-lg dropdown-toggle" type="button" data-toggle="dropdown">Prisijungti</button>
      <ul class="dropdown-menu">
        <li><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#signinClient">Prisijungimas vartotojui</button></li>
        <li><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#signinCompany">Prisijungimas įmonei</button></li>
      </ul>
    </div>
    <div id="signinClient" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Vartotojo prisijungimas</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="form-control">
              <div class="form-group">
                  <label for="email">El. paštas</label>
                  <input
                          type="email"
                          name="email"
                          class="form-control"
                          v-model="email">
              </div>
              <div class="form-group">
                  <label for="password">Slaptažodis</label>
                  <input
                          type="password"
                          name="password"
                          class="form-control"
                          v-model="password">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info btn-lg" @click.prevent="signinClient">Prisijungti</button>
          </div>
        </div>
      </div>
    </div>
    <div id="signinCompany" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Įmonės prisijungimas</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="form-control">
              <div class="form-group">
                  <label for="email">El. paštas</label>
                  <input
                          type="email"
                          name="email"
                          class="form-control"
                          v-model="email">
              </div>
              <div class="form-group">
                  <label for="password">Slaptažodis</label>
                  <input
                          type="password"
                          name="password"
                          class="form-control"
                          v-model="password">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info btn-lg" @click.prevent="signinCompany">Prisijungti</button>
          </div>
        </div>
      </div>
    </div>
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
      }
    }
  }
</script>

<style>
.login-right {
  position: absolute;
  right: 100px;
  top: 20px;
}
</style>
