<template>
  <div>
    Pridėkite informaciją apie savo paslaugą: <Br /><Br />
    <form class="form-group">
      <div class="form-group form-inline">
        <input type="text" class="form-control" placeholder="Darbo laikas nuo (val)" v-model="info.from"> &nbsp;
        <input type="text" class="form-control" placeholder="Darbo laikas iki (val)" v-model="info.until"> &nbsp;
        <input type="text" class="form-control" placeholder="Susitikimo trukmė (min)" v-model="info.duration"> &nbsp;
        <input type="text" class="form-control" placeholder="Kabinetas" v-model="info.room"> &nbsp;
        <button type="button" class="btn btn-info" @click.prevent="saveInfo()">Išsaugoti</button><br /><br />
      </div>
    </form>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Darbo laikas nuo (val)</th>
          <th>Darbo laikas iki (val)</th>
          <th>Susitikimo trukmė (min)</th>
          <th>Kabinetas</th>
          <th>Veiksmai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(t, index) in time">
          <td>{{ t.from }}</td>
          <td>{{ t.until }}</td>
          <td>{{ t.duration }}</td>
          <td>{{ t.room }}</td>
          <td><button type="button" class="btn btn-info" @click="removeInfo(index)">Trinti</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        time: [],
        info: {
          from: '',
          until: '',
          duration: '',
          room: ''
        }
      }
    },
    methods: {
        saveInfo () {
          this.time.push({
            from: this.info.from,
            until: this.info.until,
            duration: this.info.duration,
            room: this.info.room
          })

          this.info = {
            from: '',
            until: '',
            duration: '',
            room: ''
          }
        },
        removeInfo (index) {
          this.time.splice(index, 1)
        }
    }
  }
</script>

<style>
</style>
