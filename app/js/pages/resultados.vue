<template>
    <div>
        Soy resultados con id 
        {{ id }}
        {{ search }}
        {{ disabled }}
        <boxresults></boxresults>
    </div>
</template>

<script>
    import boxresults from '../components/box-results.vue'

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