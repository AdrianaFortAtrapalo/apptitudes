<template>
    <div>
        <input type="text" placeholder="Buscar aptitud" v-model="eee"/>
        <span v-on:click="buscarAptitud">Buscar</span>
        <p>Message is: {{ eee }}</p>

        <resultados></resultados>
    </div>
</template>

<script>
    import resultados from '../components/resultados.vue';

    export default {
        data () {
            return {
                eee: ''
            }
        },
        methods: {
            buscarAptitud () {
                return this.eee;
            }
        },

        components: {
            resultados
        }
    }

</script>