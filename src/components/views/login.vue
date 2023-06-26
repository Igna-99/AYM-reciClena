<template>
  <div v-if="!this.store.isLogged" class="formulario">
    <div class="formulario_lg">
      <h2>INICIAR SESION</h2>
      <div>
        <div class="inputBox">
          <input type="text" required v-model="this.email">
          <span>Correo Electronico</span>
        </div>

        <div class="inputBox">
          <input type="password" required v-model="this.password">
          <span>Contraseña</span>
        </div>

        <button type="submit" class="ingresar" @click="ingresar">Iniciar Sesión</button>
        <button type="Aceptar" class="ingresar">Recuperar clave</button>

        <div v-if="this.error1" class="alert alert-danger" role="alert">
          email o contraseña incorrectos
        </div>
        <div v-if="this.error2" class="alert alert-danger" role="alert">
          email o contraseña no ingreados
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container">
    <h1>you are already logged in</h1>
    <button type="submit" class="salir" @click="salir">Salir</button>
  </div>
  </template>


<script>
import { superStore } from '../store/superStore';
import { useRouter } from "vue-router";
document.title = "Iniciar Sesion"


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
.ingresar {
  margin-top: 20px;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid white;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1%, transparent 40%, transparent 60%, rgba(145, 145, 145, 0.1) 100%);
  color: white;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.4), 0 0 9px 3px rgba(255, 255, 255, 0.1);
}

.ingresar:hover {
  color: #ffffff;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.6), 0 0 9px 3px rgba(255, 255, 255, 0.2);
}

.ingresar:before {
  content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform .4s ease-in-out;
  background: linear-gradient(to right, transparent 1%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, transparent 100%);
}

.ingresar:hover:before {
  transform: translateX(15em);
}

.inputBox {
  position: relative;
  max-width: 100%;
  min-width: 250px;
  align-content: center;
  margin-bottom: 20%;
}

.inputBox input {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: #799c46;
  border-radius: 1px;
  outline: none;
  color: white;
  font-size: 1em;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.267);
  text-transform: uppercase;
  transition: 0.4s;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  color: white;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 10px;
  background: #799c46;
  border-left: 1px solid white;
  border-right: 1px solid white;
  letter-spacing: 0.2em;
}

.inputBox input:valid,
.inputBox input:focus {
  border: 1px solid white;
}

.formulario {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #004b0c00;
  position: relative;
  padding: 15px;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
  max-width: 100%;
  width: 40%;
  margin: 0 auto;
}

.formulario::before,
.formulario::after {
  content: '';
  position: absolute;
  right: 0;
  left: 0;
  height: calc(40%);
  border: 1px solid #ffffff;
  transition: all .15s ease;
}

.formulario::before {
  top: 0;
  border-bottom-width: 0;
}

.formulario::after {
  bottom: 0;
  border-top-width: 0;
}

.formulario_lg {
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 80px;
  position: relative;
  color: #fff;
  background-color: #799c46;
  overflow: hidden;
  max-width: 100%;
  z-index: 1;
}

.formulario_lg button {
  margin: 0 auto;
  display: block;
  margin-bottom: 10px;
}

.container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.container h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.container button {
  width: 100%;
  padding: 10px;
  color: #fff;
  border: none;
  margin-bottom:39px;
  border-radius: 4px;
  margin-bottom: 15px;
  cursor: pointer;
}

.salir {
  background-color: #af4c4c;
}

.salir:hover {
  background-color: #b83939;
}
/*
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

}*/
</style>
