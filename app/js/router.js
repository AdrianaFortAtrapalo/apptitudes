let Vue = require('../node_modules/vue/dist/vue.js');
import VueRouter from '../node_modules/vue-router/dist/vue-router';

Vue.use(VueRouter);

import buscador from './pages/buscador.vue';
import resultados from './components/resultados.vue';
import ficha from './pages/ficha.vue';
import login from './pages/login.vue';

const routes = [
    { path: '/resultados', name: 'resultados', component: resultados, props: {id: 4, search: 'djnsjgsdjfjkjgsdnj', disabled: true } },
    { path: '/', name: 'buscador', component: buscador },
    { path: '/ficha', name: 'ficha', component: ficha },
    { path: '/login', name: 'login', component: login }
];

const router = new VueRouter({
    routes
});
 
const app = new Vue({
    router
}).$mount('#app');

