<script>
import { superStore } from './components/store/superStore';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      store: superStore()
    };
  },
  methods: {
    salir() {
      // metodo salir de usuario
      this.store.logOut()
      alert('Cierre de sesión exitosa')

    }
  },
  mounted() {
    this.store.cargarDataStorage();

    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.constains('open');

      toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }
  },
}
</script>

<template>
    <header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="navbar">
      <div class="logo">
        <router-link to="/">RECICLYNG</router-link>
      </div>
      <div v-if="!this.store.isLogged">
        <ul class="links">
          <router-link class="nav-link active" to="/login"> INICIAR SESION</router-link>
          <router-link class="nav-link " to="/registro"> REGISTRARSE </router-link>
        </ul>
      </div>
      <div v-else>
        <button class="action_btn" @click="salir"> CERRAR SESION </button>

        <!--<router-link class="action_btn" to="/login"> CERRAR SESION</router-link>-->
      </div>
      <div class="toggle_btn"> <i class="fa-solid fa-bars"></i></div>
    </div>

    <div class="dropdown_menu">
      <div v-if="!this.store.isLogged">
        <router-link class="nav-link active" to="/login"> INICIAR SESION</router-link>
        <router-link class="nav-link " to="/registro"> REGISTRARSE </router-link>
      </div>
      <div v-else>
        <router-link class="action_btn" to="/login"> Iniciar Sesion</router-link>
      </div>
    </div>
  </header>
  


  <div>
    <RouterView></RouterView>
  </div>
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
}



li {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
}

a:hover {
  color: rgb(13, 156, 0);
}

header {
  position: relative;
  padding: 0 1rem;
}

.navbar {
  width: 100%;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar .logo a {
  font-size: 1.7rem;
  font-weight: bold;
}

.navbar .links {
  display: flex;
  gap: 2rem;
}

.navbar .toggle_btn {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
}

.action_btn {
  background-color: rgb(139, 2, 2) !important;
  color: black;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  font-weight: bold;
  transition: scale 0.2 ease;
}

.action_btn:hover {
  scale: 1.05;
  color: rgb(29, 0, 0);
}

.action_btn:active {
  scale: 0.95;
}
@media(min-width:701px) {
  .dropdown_menu{
    height: 0 !important;
  }
}

@media(max-width:700px) {

  .navbar .links,
  .navbar .action_btn {
    display: none;
  }

  .navbar .toggle_btn {
    display: block;
  }
}

@media(max-width:576px) {
  .dropdown_menu {
    left: 2rem;
    width: unset;
  }
}

.dropdown_menu {
  display: none;
  position: absolute;
  right: 2rem;
  top: 60px;
  height: 0;
  width: 300px;
  background: rgba(255, 255, 255, 0.322);
  backdrop-filter: blur(15px);
  border-radius: 5px;
  overflow: hidden;
  transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
}

.dropdown_menu.open {
  height: 110px;
}

.dropdown_menu a {
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
}
.dropdown_menu a:hover{
  background-color: white;
  color:black;
}

.dropdown_menu .action_btn {
  width: 100%;
  display: flex;
  justify-content: center;
}

.dropdown_menu {
  display: block;
}
</style>
