<template>
  <div id="app">
    <div class="dropdown reg-right">
      <button class="btn btn-info btn-lg dropdown-toggle" type="button" data-toggle="dropdown">Registracija
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#regUser">Registracija vartotojui</button></li>
        <li><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#regCompany">Registracija įmonei</button></li>
      </ul>
    </div>
    <div class="login-right">
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#login">Prisijungti</button>
    </div>
    <div id="regUser" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Kliento registracijos forma</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="form-control">
              <fieldset>
                <legend>Prisijungimo duomenys</legend>
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
              </fieldset>
              <fieldset>
                <legend>Kontaktiniai duomenys</legend>
                <div class="form-group">
                    <label for="first_name">Vardas</label>
                    <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            class="form-control"
                            v-model="first_name">
                </div>
                <div class="form-group">
                    <label for="last_name">Pavardė</label>
                    <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            class="form-control"
                            v-model="last_name">
                </div>
                <div class="form-group">
                    <label for="city">Miestas</label>
                    <input
                            type="text"
                            name="city"
                            class="form-control"
                            v-model="city">
                </div>
                <div class="form-group">
                    <label for="phone">Tel. Nr.</label>
                    <input
                            type="text"
                            name="phone"
                            class="form-control"
                            v-model="phone">
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info btn-lg" @click.prevent="signupClient">Registruotis</button>
          </div>
        </div>
      </div>
    </div>
    <div id="regCompany" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Įmonės registracijos forma</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="form-control">
              <fieldset>
                <legend>Prisijungimo duomenys</legend>
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
              </fieldset>
              <fieldset>
                <legend>Kontaktiniai duomenys</legend>
                <div class="form-group">
                    <label for="company_name">Įmonės pavadinimas</label>
                    <input
                            type="text"
                            id="company_name"
                            name="company_name"
                            class="form-control"
                            v-model="company_name">
                </div>
                <div class="form-group">
                    <label for="city">Miestas</label>
                    <input
                            type="text"
                            name="city"
                            class="form-control"
                            v-model="city">
                </div>
                <div class="form-group">
                    <label for="phone">Tel. Nr.</label>
                    <input
                            type="text"
                            name="phone"
                            class="form-control"
                            v-model="phone">
                </div>
                <div class="form-group">
                    <label for="password">Įmonės aprašymas</label>
                    <textarea
                            id="description"
                            name="description"
                            class="form-control"
                            placeholder="Čia galite aprašyti savo įmonę..."
                            v-model="description"></textarea>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info btn-lg" @click.prevent="signupCompany">Registruotis</button>
          </div>
        </div>
      </div>
    </div>
    <div id="login" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Prisijungimas</h4>
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
            <button type="submit" class="btn btn-info btn-lg" @click.prevent="login">Prisijungti</button>
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
        password: '',
        first_name: '',
        last_name: '',
        city: '',
        phone: '',
        company_name: '',
        description: ''
      }
    },
    methods: {
      signupClient() {
          axios.post('http://192.168.123.103/api/user',
              {email: this.email, password: this.password, first_name: this.first_name, last_name: this.last_name, city: this.city, phone: this.phone})
              .then(
                  (response) => console.log(response)
              )
              .catch(
                  (error) => console.log(error)
              );
      },
      signupCompany() {
          axios.post('http://192.168.123.103/api/company',
              {email: this.email, password: this.password, company_name: this.company_name, city: this.city, phone: this.phone, description: this.description})
              .then(
                  (response) => console.log(response)
              )
              .catch(
                  (error) => console.log(error)
              );
      },
      login() {

      }
    }
  }
</script>

<style>
.dropdown-menu {
  padding: 0;
  background-color: #17a2b8;
}

.reg-right {
  position: absolute;
  right: 180px;
  top: 20px;
}

.modal-footer {
  justify-content: center;
}

.login-right {
  position: absolute;
  right: 50px;
  top: 20px;
}

.btn-lg {
  width: 100%;
}
</style>
