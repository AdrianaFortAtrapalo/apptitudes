import Firebase from './Firebase';

export default class User {
    constructor(email, password) {
        this.fb = email;
        this.email = email;
        this.password = password;
    }

    login() {
        let fb = new Firebase();
        let _this = this;
        fb.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(function (user) {
            _this.getCurrentUser(user);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    getCurrentUser(user) {
        if (!user) {
            let user = fb.auth().currentUser;
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
