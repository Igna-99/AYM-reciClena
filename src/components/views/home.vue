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
      alert('Cierre de sesión exitosa')
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

  <div v-else>
    <div class="nolo">
    <img src="../../assets/fondo.jpeg" alt="Imagen">
    <div class="home_title">SI AMAS LA TIERRA, RECICLA Y CONSERVA</div>
    <div class="textnolo">Recicla con RECICLYNG</div>
  </div>  

  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

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

body {
  height: 100h;
  background-color:#5F822D;

}
.nolo{
  width: 100%;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.nolo .textnolo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  font-size:1.5em;
  font-weight: bold;
  margin-top: 230px;
}

.nolo img{
  width: 100%;
  height: auto;
  display: block;
}

.home_title{
  margin: 0;
  justify-content: center;
  display: flex;
  color:white;
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-clip: text; 
  overflow: hidden;
  background: linear-gradient(90deg, #118a22, #0a5514, #118a22);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 4s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  font-size:3em;
  font-weight: bold;
}

@keyframes animate {
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
}


</style>
