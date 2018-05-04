<template>
  <div>
    <div class="addCompany">
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#addCompany">Pridėti paslaugą &plus;</button>
    </div>
    <div id="addCompany" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Pridėti paslaugą</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="form-group">
              <fieldset>
                <button type="button" class="btn btn-info btn-lg" @click="addRow()">Pridėti</button><br /><br />
                <div class="form-inline" v-for="(service, index) in services">
                    <input
                            type="text"
                            name="service"
                            class="form-control"
                            placeholder="Pridėkite paslaugą"
                            v-model="service.next"> &nbsp;
                            <button type="button" class="btn btn-secondary" @click="deleteRow(index)">Ištrinti</button><br /><br />
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info btn-lg" @click.prevent="saveServices()">Išsaugoti</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        services: []
      }
    },
    methods: {
      saveServices() {

      },
      addRow() {
        this.services.push({
          
        })
      },
      deleteRow(index) {
        this.services.splice(index,1)
      }
    }
  }
</script>

<style>
.addCompany {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
