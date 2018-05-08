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
        <legend>Kontaktiniai duomenys</legend>
        <div class="form-group">
            <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Vardas"
                    class="form-control"
                    v-model="first_name">
        </div>
        <div class="form-group">
            <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Pavardė"
                    class="form-control"
                    v-model="last_name">
        </div>
        <div class="form-group">
            <input
                    type="text"
                    name="city"
                    placeholder="Miestas"
                    class="form-control"
                    v-model="city">
        </div>
        <div class="form-group">
            <input
                    type="text"
                    name="phone"
                    placeholder="Tel. Nr."
                    class="form-control"
                    v-model="phone">
        </div>
      <button type="submit" class="btn btn-info btn-lg" @click.prevent="signup">Registruotis</button>
    </form>
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
      signup() {
          axios.post('http://192.168.123.107/api/user',
              {email: this.email, password: this.password, first_name: this.first_name, last_name: this.last_name, city: this.city, phone: this.phone})
              .then(
                  (response) => console.log(response),
                  this.$router.push({ path: '/signin' })
              )
              .catch(
                  (error) => console.log(error)
              );
      }
    }
  }
</script>

<style>
</style>
