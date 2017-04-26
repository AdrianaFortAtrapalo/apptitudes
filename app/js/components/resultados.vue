<template>
    <div>
        Soy resultados!!!

        <boxresults></boxresults>

                {{ id }}
                {{ search }}
                {{ disabled }}
    </div>
</template>

<script>
    import boxresults from './box-results.vue'

    export default {
        data () {
            return {
                eee: ''
            } 
        },
        methods: { 
            buscarAptitud () {
                alert(this.eee);
            }
        },

        components: {
            boxresults
        }
    }
</script>