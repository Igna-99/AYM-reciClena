<template>
  <div v-if="!this.store.isLogged" class="divf">

    <h1>Registrarme</h1>
    Razon social, Cuit, Correo, clave, sucursales, dirección, nro de CBU, telefono.

    <legend><span class="number">1</span> Your basic info</legend>

    <label for="name">Razon social:</label>
    <input type="text" v-model="this.razonSocial">

    <label for="name">Cuit:</label>
    <input type="text" v-model="this.cuit">

    <label for="mail">Email:</label>
    <input type="email" v-model="this.email">

    <label for="password">Clave:</label>
    <input type="password" v-model="this.clave">

    <label for="password">Confirmar Clave:</label>
    <input type="password" v-model="this.confirmClave">

    <label for="name">Dirección:</label>
    <input type="text" v-model="this.direccion">

    <label for="name">CBU:</label>
    <input type="text" v-model="this.CBU">

    <label for="name">Teléfono:</label>
    <input type="text" v-model="this.telefono">

    <button type="submit" @click="registrse">Sign Up</button>

    <button type="reset">Borrar todo</button>

    <div v-if="this.error1" class="alert alert-danger" role="alert">
      no se han ingresado todos los datos necesarios
    </div>
    <div v-if="this.error2" class="alert alert-danger" role="alert">
      El Email es invalido
    </div>
    <div v-if="this.error3" class="alert alert-danger" role="alert">
      las claves no son iguales
    </div>

  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { superStore } from '../store/superStore';

export default {
  data() {
    return {
      store: superStore(),
      error1: false,
      error2: false,
      error3: false,
      razonSocial: "",
      cuit: "",
      email: "",
      clave: "",
      confirmClave: "",
      direccion: "",
      CBU: "",
      telefono: "",


    }
  },
  methods: {

    async registrse() {


      this.error1 = false;
      this.error2 = false;  
      this.error3 = false;

      if (this.razonSocial == "" || this.cuit == "" || this.email == "" || this.clave == "" || this.direccion == "" || this.CBU == "" || this.telefono == "" ) {

        this.error1 = true;

      } else if (!this.emailValido()) {

        this.error2 = true;

      } else if (this.clave != this.confirmClave){

        this.error3 = true;

      } else {


        let todoPelota = await this.store.registrarse(this.razonSocial,this.cuit,this.email,this.clave,this.direccion,this.CBU,this.telefono)

        if(todoPelota) 
        {
          alert("todo pelota")
          let tame = await this.store.logIn(this.email,this.clave)

          if(tame){
            this.$router.push("/");
          }
        }
      };
    },

    emailValido(){
      let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return patron.test(this.email)
    }




  }

}
</script>


<style scoped>
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

fieldset {
  margin-bottom: 30px;
  border: none;
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
