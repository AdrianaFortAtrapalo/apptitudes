
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

    login(email, password){
        let _this = this;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            _this.getCurrentUser(user);
        })
        .catch(function(error) {
            console.log(error); 
        });
    }

    getCurrentUser(user){
        if(!user){
            let user = firebase.auth().currentUser;
        }
        let name, email, photoUrl, uid;
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            uid = user.uid;
        }
    }
}