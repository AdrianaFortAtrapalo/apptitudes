<template>
    <div>
        <input type="text" placeholder="Buscar aptitud" v-model="eee"/>
        <span v-on:click="buscarAptitud">Buscar</span>
        <p>Message is: {{ eee }}</p>
        <span v-on:click="logOut">Logout</span>
        <resultados></resultados>
    </div>
</template>

<script>
    import resultados from '../components/resultados.vue';

    export default {
        data () {
            return {
                eee: '',
                existCurrentUser: app.userExistCurrent()
            }
        },
        methods: {
            buscarAptitud () {
                return this.eee; 
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