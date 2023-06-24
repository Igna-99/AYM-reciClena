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


<style scoped></style>
