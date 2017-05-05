<template>
    <div>
        <input type="text" placeholder="Buscar aptitud" v-model="search"/>
        <span v-on:click="buscarAptitud">Buscar</span>

        <span v-on:click="logOut">Logout</span>
        <resultados :busqueda="search"></resultados>
    </div>
</template>

<script>
    import resultados from '../components/resultados.vue';
    import { app } from '../proxy';

    // Look for if we have an user
    export default {
        data () {
            return {
                search: null,
                myName: null,
                existUser: app.userExistCurrent()
            }
        },
        methods: {
            buscarAptitud () { 
                return this.search;
            },
            logOut(){
                app.userLogOut();
            }
        },
        components: {
            resultados
        }
    }

</script>


<style>
    .menu{ 
        display: block !important;
    }
</style>