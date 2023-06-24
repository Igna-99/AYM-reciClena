<script>
import { superStore } from './components/store/superStore';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            store: superStore()
        };
    },
    methods: {},
    components: { RouterLink }
}



</script>


<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Reciclyng</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" to="/login">Iniciar Secion</router-link>
          <router-link class="nav-link" to="/registro">Registrarse</router-link>

        </div>
      </div>
    </div>
  </nav>


  <div>
    <RouterView></RouterView>
  </div>
</template>


<style scoped></style>
