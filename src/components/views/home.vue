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

  <div v-else>
    <div class="nolo">
    <img src="https://lh3.googleusercontent.com/pw/AJFCJaVcwIWiabZJHRjUTPSRKDLXWpDU9FqjyylR8xdAvF1mp3vRYOm7jKORtglCi2-53Ro2ZkXMMbI1gYKicDo1XiW0-YoplYh1jRzkIzjHVsmq16n0ScYlPpwC2sfCtPQFy8BXun30P1Ep35WPaNkslovbRKlZQWZGvu0zOU0Ke4iW4Re_tywp6G1xAWNuU5ZcU2WOk8Hxuaq8zsS_FsDDBi_cD5e2ctPqXRYyplPPq8-_GLUlBQ9zzDfoCwEFSK7E--3O9mil-1qh9zftc4-n3APjt7ijcbb5LtM1Dm5y0pdbahuLmQRnYW1ZNtsocqOVM1YOcDKhWrcjsODCDqJohMC95m_LZ5VzOWjz5Nmm0H0Il-AI7MMTMVNHF97fdMmnCY-ULnZbl4O9dvwzYZCQsQWwNhhlBXlJVC1UdS2Wm9SxP4T3Ub3gOuWkUWTw-7NabtO5QcsYI27i61vFi97T7-S8ZEokxYei2FmSe0fTsUAKsrknN3vdEDfFRAX-LcU5740BhIuobse89nZO8_VTR79nMuZS--2bJOT7ZbQPvSrciCeU9Hh_KuSsIpnrFKfGqQq15UMRO6ueDYm0bUWWYIjE1nNow8p1ZZllvHV_lRgPIOxOhqXXggwxuO7RKPwTM64Cx19EM062N5bHmAchY2U1BGQH4xY3mQ-ShHJcvBHhbszSz5uH9Gu-M32RfpBJKDbtve7nZA__ZUXTOVhVQxlxZ69aKNxavyCgIg3o-0xXgR6B427ELbgUmk_YvabRqFHhqiwstvw7qbZRVZxU_JinWHl1UG0EU5ojq1Nn8h5zDEUMeC6YCLACnhYSMITHSkdVApFvLsKd-3LKTc7ojWgYQrEuORX3MUYJHWvY0mBwH40_8Lpq0MoLFapdBFczKOELs1l-NDHH8eWDK0XCXuGizJ0BqxBxZqPf7P-15O2NbSckkqzNMtsMbkwj_0KgIl-81wJK4e0kgmNjm2TTqPtnGIgGq8eaKdHuaNQIByYm5rJjyNE4R1YJJrfcVd3n=w1325-h331-s-no?authuser=1" alt="Imagen">
    <div class="home_title">SI AMAS LA TIERRA, RECICLA Y CONSERVA</div>
    <div class="textnolo">Recicla con RECICLYNG</div>
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
@import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

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
