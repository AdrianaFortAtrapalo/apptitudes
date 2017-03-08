<template>
    <div>
        <input type="text" placeholder="Buscar aptitud" v-model="eee"/>
        <span v-on:click="buscarAptitud">Buscar</span>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                eee: ''
            }
        },
        methods:{
            buscarAptitud () {
                alert(this.eee);
            }
        }
    }

</script>