<template>
    <div>
        <ul>
            <li><input type="text" v-model="email" placeholder="Email"></li>
            <li><input type="text"  v-model="password" placeholder="password"></li>
            <li v-on:click="login">Login</li>
        </ul>
    </div>
</template>

<script>
    import { app } from '../proxy';
    
    export default {
        data () {
            return {
                email: '',
                password: '',
                existUser: app.userExistCurrent()
            }
        },
        methods: {
            login () {
                app.userLogIn(this.email,this.password);
            }
        }
    }

</script>