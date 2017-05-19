<template>
    <div>

    <div class="search-block">
        <input type="text" placeholder="Buscar aptitud" v-model="search" class="search-input" />
    </div>
        

        <resultados :busqueda="search"></resultados>
        <ul>
             <li v-for="u in allUsers">
                <h3>{{ u.username }}</h3>
                <p>{{ u.email }}</p>
             </li>
        </ul>
        <span v-on:click="logOut">Logout</span>
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
                existUser: app.userExistCurrent(),
                allUsers: app.searchGetAllUsers()
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