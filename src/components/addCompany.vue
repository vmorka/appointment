<template>
  <div class="container">
    <form class="form-control">
      <fieldset>
        <legend>Kontaktiniai duomenys</legend>
        <div class="form-group">
            <input
                    type="text"
                    name="company_name"
                    placeholder="Įmonės pavadinimas"
                    class="form-control"
                    v-model="company_name">
        </div>
        <div class="form-group">
            <input
                    type="text"
                    name="address"
                    placeholder="Įmonės adresas"
                    class="form-control"
                    v-model="address">
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
      </fieldset>
      <fieldset>
        <legend>Paslaugos</legend>
        <div class="form-group">
            <input
                    type="text"
                    name="service"
                    placeholder="Paslaugos pavadinimas"
                    class="form-control"
                    v-model="service">
        </div>
        <div class="form-group">
            <input
                    type="text"
                    name="specialist"
                    placeholder="Specialistas"
                    class="form-control"
                    v-model="specialist">
        </div>
      </fieldset>
      <button type="button" class="btn btn-info" @click="addCompany()">Pridėti</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        company_name: '',
        address: '',
        city: '',
        phone: '',
        service: '',
        specialist: ''
      }
    },
    methods: {
      addCompany () {
        axios.post('http://192.168.123.107/api/user',
            {company_name: this.company_name, address: this.address, city: this.city, phone: this.phone, service: this.service, specialist: this.specialist})
            .then(
                (response) => console.log(response),
                alert("Sėkmingai pridėta."),
                this.$router.push({ path: '/appointments' })
            )
            .catch(
                (error) => console.log(error)
            );
      }
    }
  }
</script>

<style>
.container {
  text-align: center;
}
</style>
