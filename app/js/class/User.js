export default class User{
    constructor(firebase) {
        this.firebase = firebase;
        this.user = null;
    }

    login(email,password) {
        this.firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=> {
            this.getCurrentUser();
        })
        .catch(function (error) {
            console.log(error.message);
        }); 
    }

    getCurrentUser(){
        let user = this.firebase.auth().currentUser;

        if (user != null) {
            this.user = user;
            this._updateUserDisplayName();
            window.location = '/#/';
        } else {
            window.location = '/#/login';
        } 
    }

    _updateUserDisplayName(){
        let splitEmail = this.user.email.split('.');
        let displayName = splitEmail[0]+' '+ splitEmail[1];
        this.user.updateProfile({ displayName:displayName });
    }

    getId(){
       return this.user.uid;
    }
}
