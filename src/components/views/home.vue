<script>
import { superStore } from '../store/superStore';

export default {
  data() {
    return {
      store: superStore()
    }
  },
  methods: {
    salir() {
      // metodo salir de usuario
      this.store.logOut()
    }

  },
  async created() {

  }

}
</script>


<template>
  <div id="contenedor" v-if="this.store.isLogged">

    <div class="divf">

      <h1>Este es el HOME</h1>


      <h2> Usuaro logueado </h2>
      <h6> Email: {{ this.store.currentUser.email }} </h6>
      <h6> Razon Social: {{ this.store.currentUser.razonSocial }} </h6>
      


      <button type="Aceptar" @click="salir">Cerrar sesión</button>

    </div>

  </div>

  <div id="contenedor" v-else>

    <div class="divf">

      <h1>YVAN EHT NIOJ</h1>

    </div>

  </div>
</template>


<style scoped>
#contenedor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}


*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  color: #384047;
}

.divf {
  max-width: 300px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #f4f7f8;
  border-radius: 8px;
}

h1 {
  margin: 0 0 30px 0;
  text-align: center;
}







button {
  padding: 19px 39px 18px 39px;
  color: #FFF;
  background-color: #4bc970;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #3ac162;
  border-width: 1px 1px 3px;
  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
  margin-bottom: 10px;
}





@media screen and (min-width: 480px) {

  .divf {
    max-width: 480px;
  }

}
</style>
