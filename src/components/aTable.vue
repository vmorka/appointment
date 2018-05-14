<template>
  <vue-good-table
    :columns="columns"
    :rows="rows"
    :search-options="{
      enabled: true,
      placeholder: 'Ieškoti',
    }"
    :pagination-options="{
      enabled: true,
      perPage: 10,
      rowsPerPageLabel: 'Įrašų puslapyje',
      ofLabel: 'iš',
      allLabel: 'Visi',
      nextLabel: 'Sekantis',
      prevLabel: 'Ankstesnis',
    }"
    :sort-options="{
      enabled: true,
      initialSortBy: {field: 'service', type: 'asc'}
    }"
    styleClass="vgt-table table-hover bordered">
      <div class="center" slot="emptystate">
        Nėra rezultatų atitinkačių paiešką.
      </div>
  </vue-good-table>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      columns: [
      {
        label: 'Paslauga',
        field: 'service',
        filterOptions: {
          enabled: true,
        }
      },
        {
          label: 'Specialistas',
          field: 'specialist',
          filterOptions: {
            enabled: true,
          }
        },
          {
            label: 'Įmonė',
            field: 'company_name',
            filterOptions: {
              enabled: true,
            }
          },
          {
            label: 'Miestas',
            field: 'city',
            filterOptions: {
              enabled: true,
            }
          },
        {
          label: 'Adresas',
          field: 'address',
          filterOptions: {
            enabled: true,
          }
        },
        {
          label: 'Tel. Nr.',
          field: 'phone',
          filterOptions: {
            enabled: true,
          },
          sortable: false
        }
      ],
      rows: []
    }
  },
  mounted() {
      axios.get('http://192.168.123.108/api/companies')
      .then(
        response => {
          this.rows = this.rows.concat(response.data.company)
        }
      )
      .catch(
        error => console.log(error)
      );
    }
}
</script>

<style>
.center {
  text-align: center;
}
</style>
