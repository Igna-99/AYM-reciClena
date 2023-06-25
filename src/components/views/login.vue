<template>
  <div id="contenedor" v-if="!this.store.isLogged">

    <div class="divf">

      <h1>Inciar sesión</h1>

      <label for="mail">Email:</label>
      <input type="email" required v-model="this.email">

      <label for="password">Clave:</label>
      <input type="password" required v-model="this.password">

      <button type="submit" class="ingresar" @click="ingresar">Sign Up</button>

      <button type="Aceptar">Recuperar clave</button>

      <div v-if="this.error1" class="alert alert-danger" role="alert">
        email o contraseña incorrectos
      </div>
      <div v-if="this.error2" class="alert alert-danger" role="alert">
        email o contraseña no ingreados
      </div>

    </div>

  </div>

  <div v-else class="container">
    > <h1>you are already logged in</h1>
    <button type="submit" class="salir" @click="salir">Salir</button>
  </div>
</template>


<script>
import { superStore } from '../store/superStore';
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      store: superStore(),
      error1: false,
      error2: false,
      email: "",
      password: "",
    }
  },
  methods: {
    async ingresar() {
      this.error1 = false;
      if (this.email == "" || this.password == "") {
        this.error2 = true;
      } else {
        this.error2 = false;
        let res = await this.store.logIn(this.email, this.password)
        if (res == false) {
          this.error1 = true;
        } else {
          this.error1 = false;
          this.$router.push("/");
        }
      }
    },

    salir() {
      // metodo salir de usuario
      this.store.logOut()
    }


  }

}
</script>


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

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
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



legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
}

label.light {
  font-weight: 300;
  display: inline;
}

.number {
  background-color: #5fcf80;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 100%;
}

@media screen and (min-width: 480px) {

  .divf {
    max-width: 480px;
  }

}
</style>
