<template>
    <div>
        <!-- Resultados para la búsqueda: {{ busqueda }} -->

        <template v-for="n in searchWord">
            <p>Hemos encontrado a {{n }} !!!!</p>
        </template>

        <boxresults></boxresults>

    </div>
</template>

<script>
    import boxresults from './box-results.vue'

    export default {
        data () {
            return {
                usuarios: '',
                items: [ 'Lucía', 'Pau', 'Roger', 'Alberto']
            } 
        },
        computed: {
            searchWord: function(){
                var texto = this.busqueda;
                var personas = this.items;

                return personas.filter(function (item) {
                    if(item == texto){
                        return item
                    }
                })
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
            
        }
    }
</script>