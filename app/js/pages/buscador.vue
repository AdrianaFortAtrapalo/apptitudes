<template>
    <div>
        <input type="text" placeholder="Buscar aptitud" v-model="search"/>
        {{ userName }}
        <span v-on:click="buscarAptitud">Buscar</span>
        <p>Message is: {{ search }}</p>
        <span v-on:click="logOut">Logout</span>
        <resultados :busqueda="search"></resultados>
    </div>
</template>

<script>
    import resultados from '../components/resultados.vue';

    export default {
        data () {
            return {
                search: null,
                userName: app.userName()
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