<template>
  <div class="container">
    <div>
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#cities">Miestai</button>
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#services">Paslaugos</button>
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#specialists">Specialistai</button>
    </div><br />
    <div>
      <router-link class="btn btn-info btn-lg" :to="{ name: 'addCompany' }">Pridėti įmonę +</router-link>
    </div>

    <div id="cities" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Pasirinkite miestą</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div v-for="city in cities">
                 <a href="">{{ city.city_name }}</a>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info" data-dismiss="modal">Uždaryti</button>
          </div>
        </div>
      </div>
    </div>

    <div id="services" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Pasirinkite paslaugą</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div v-for="service in services">
                 <a href="">{{ service.service }}</a>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info" data-dismiss="modal">Uždaryti</button>
          </div>
        </div>
      </div>
    </div>

    <div id="specialists" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Pasirinkite specialistą</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div v-for="specialist in specialists">
                 <a href="">{{ specialist.specialist }}</a>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info" data-dismiss="modal">Uždaryti</button>
          </div>
        </div>
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
