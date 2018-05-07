<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <button type="button" class="btn btn-info">Miestai</button>
        <button type="button" class="btn btn-info">Paslaugos</button>
        <button type="button" class="btn btn-info">Specialistai</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      cities: [],
      services: [],
      specialists: []
    }
  },
  methods:  {
    onGetCities() {
      axios.get('http://192.168.123.107/api/cities')
      .then(
        response => {
          this.cities = response.data.city
        }
      )
      .catch(
        error => console.log(error)
      );
    },
    onGetServices() {
      axios.get('http://192.168.123.107/api/services')
      .then(
        response => {
          this.services = response.data.service;
        }
      )
      .catch(
        error => console.log(error)
      );
    },
    onGetSpecialists() {
      axios.get('http://192.168.123.107/api/specialists')
      .then(
        response => {
          this.specialists = response.data.specialist;
        }
      )
      .catch(
        error => console.log(error)
      );
    }
  }
}
</script>

<style>

</style>
