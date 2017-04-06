
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