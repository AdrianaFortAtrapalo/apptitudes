export default class User{
    constructor(firebase,email=0,password=0) {
        this.email = email;
        this.password = password;
        this.user,this.id; 
        this.firebase = firebase;
    }

    login() {
        let that = this;
        this.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(function (user) {
            that.getCurrentUser();
        })
        .catch(function (error) {
            console.log(error.message)
        }); 
    }

    getCurrentUser(){
        let user = this.firebase.auth().currentUser;
        if (user != null) {
             window.location = "/#/";
             alert("yes user"); 
        } else {
            alert("no user");
        } 
    }
}
