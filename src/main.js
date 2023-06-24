import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'

import Home from './components/views/Home.vue'
import Registro from './components/views/registro.vue'
import Login from './components/views/login.vue'



const routes = [
    { path : "/", component : Home},
    { path : "/registro", component : Registro},
    { path : "/login", component : Login},
];

const router = createRouter({
    history : createWebHistory(),
    routes
});



const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app')
