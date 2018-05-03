<template>
  <div id="app">
    <div class="mano">
      <h1 class="center">Appointment App</h1>


<div class="mano">
<!-- Modal -->
<div id="aCity" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">Pasirinkite miestą</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <div v-for="city in cities">
            <label><input type="checkbox" name="" value="" /> {{ city.city_name }}</label>
      </div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info btn-lg" data-dismiss="modal">Ieškoti</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div id="aService" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">Pasirinkite paslaugą</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <div v-for="service in services">
            <label><input type="checkbox" name="" value="" /> {{ service.service_name }}</label>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info btn-lg" data-dismiss="modal">Ieškoti</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div id="aSpecialist" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">Pasirinkite specialistą</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <div v-for="specialist in specialists">
            <label><input type="checkbox" name="" value="" /> {{ specialist.specialist_name }}</label>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info btn-lg" data-dismiss="modal">Ieškoti</button>
      </div>
    </div>
  </div>
</div>


    <table class="table">
        <tr>
                <th><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#aCity" @click="onGetCities">Miestas</button></th>
                <th><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#aService" @click="onGetServices">Paslauga</button></th>
                <th><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#aSpecialist" @click="onGetSpecialists">Specialistas</button></th>
        </tr>
      </table>
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
        axios.get('http://192.168.123.103/api/cities')
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
        axios.get('http://192.168.0.119/api/services')
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
        axios.get('http://192.168.0.119/api/specialists')
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

<style scoped>
.center {
    margin: auto;
    width: 50%;
    border: 2px solid black;
    padding: 5px 5px;
    text-align: center;
}

.table, th {
  border: none;
  text-align: center;
}

.mano {
  padding-top: 100px;
}

.btn-lg {
  width: 200px;
}

.modal-content .btn-lg {
  width: 100%;
}

.modal-footer, .modal-body {
  justify-content: center;
}
</style>
