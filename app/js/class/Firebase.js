let firebase = require('firebase');
export default class Firebase {
    constructor(){
        var config = {
            apiKey: "AIzaSyCrf9sel9iYtG_t3HA3w5RTaAdU-U8rqjQ",
            authDomain: "apptitudes-be9ab.firebaseapp.com",
            databaseURL: "https://apptitudes-be9ab.firebaseio.com",
            projectId: "apptitudes-be9ab",
            storageBucket: "apptitudes-be9ab.appspot.com",
            messagingSenderId: "862210218120"
        };
        return firebase.initializeApp(config);
    }
} 