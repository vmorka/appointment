<template>
  <div class="title">
    <h1>Appointment App</h1>
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
      <button type="submit" class="btn btn-info btn-lg" @click.prevent="signinClient">Prisijungti</button>
    </form>
    Dar neturite paskyros? <router-link :to="{ name: 'signup' }">Užsiregistruokite.</router-link>
  </div>
</template>

<script>

</script>

<style>
.title {
  text-align: center;
}
</style>
