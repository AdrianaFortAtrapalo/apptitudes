export default class User{
    constructor(firebase,email=0,password=0) {
        this.email = email;
        this.password = password;
        this.user,this.id; 
        this.firebase = firebase;
    }

    login() {
        this.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(function (user) {
            console.log("email: "+ user.email + "id: "+user.uid);
            window.location = "/#/";
        })
        .catch(function (error) {
            
        });
    }

    getCurrentUser(){
        let user = this.firebase.auth().currentUser;
        if (user != null) {
            console.log("entro");
            window.location = "/#/";
             alert("yes user"); 
        } else {
            alert("no user");
        }
    }
}
