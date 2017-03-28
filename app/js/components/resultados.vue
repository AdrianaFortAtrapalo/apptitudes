<template>
    <div>
        Soy resultados con id 
        {{ id }}
        {{ search }}
        {{ disabled }}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                aaa: ''
            }
        },
        methods: {
            buscarAptitud () {
                alert(this.eee);
            }
        },
        props: ['id','search','disabled']
    }
    

</script>