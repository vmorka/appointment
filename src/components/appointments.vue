<template>
    <div>
      <router-link class="btn btn-info higher" :to="{ name: 'addCompany' }">Pridėti įmonę +</router-link>
      <router-link class="btn btn-info higher" :to="{ name: 'addInfo' }">Informacija +</router-link>
      <aTable></aTable>
    </div>
</template>

<script>
import axios from 'axios'
import aTable from './aTable.vue'

export default {
  data () {
    return {
    }
  },
  methods:  {
  },
  components: {
    'aTable': aTable
  }
}
</script>

<style>
.higher {
  margin-bottom: 5px;
}
</style>
