let Vue = require('../node_modules/vue/dist/vue.js');
import VueRouter from '../node_modules/vue-router/dist/vue-router';

Vue.use(VueRouter);

import buscador from './components/buscador.vue';
import resultados from './components/resultados.vue';

const routes = [
    { path: '/resultados', name: 'resultados', component: resultados, props: {id: 4, search: 'djnsjgsdjfjkjgsdnj', disabled: true } },
    { path: '/', name: 'buscador', component: buscador } 
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');

