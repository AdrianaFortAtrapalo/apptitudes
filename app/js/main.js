import prueba from './components/prueba.vue';
let Vue = require('../node_modules/vue/dist/vue.js');

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!' 
    },
    components:{
        prueba
    }
});     
    