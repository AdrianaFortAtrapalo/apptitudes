
let firebase = require('firebase');
export default class Firebase {
    constructor(){
        var config = {
            apiKey: "AIzaSyB6vzYpRLWMVYHXKKOH4IAfaBJmi7alXO0",
            authDomain: "apptitudes-94eb8.firebaseapp.com",
            databaseURL: "https://apptitudes-94eb8.firebaseio.com",
            storageBucket: "apptitudes-94eb8.appspot.com",
            messagingSenderId: "474638037938"
        };
        firebase.initializeApp(config);
    }
}