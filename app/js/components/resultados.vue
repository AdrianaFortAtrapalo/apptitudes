<template>
    <div>
        Soy resultados!!!

        <boxresults></boxresults>
        {{ busqueda }}
        
    </div>
</template>

<script>
    import boxresults from './box-results.vue'

    export default {
        data () {
            return {
                usuarios: ''
            } 
        }, 
        methods: { 
            buscarAptitud (){
               
            }
        },
        props:['busqueda'],
        components: {
            boxresults
        },
        watch: {
            busqueda: function () {
                console.log("entro");
            }
        }
    }
</script>