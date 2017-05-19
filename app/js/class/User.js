export default class User {
    constructor(firebase) {
        this.firebase = firebase;
    }

    // 1.1 Getters
    //-------------------------------------------------
    getId() {
        return this.user.uid;
    }

    getEmail() {
        return this.user.email;
    }

    getName() {
        let user = this.firebase.auth().currentUser;
        if (user != null) {
            return this.user.displayName;
        }
    }

    // 1.2. Methods
    //-------------------------------------------------

    login(email, password) {
        this.firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.user = user;
                this._updateUserDisplayName();
                this.firebase.database().ref('users/' + user.uid).set({
                    username: user.displayName,
                    email: user.email
                });
                this.getCurrentUser();
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }

    getCurrentUser() {
        setTimeout(()=>{
            let user = this.firebase.auth().currentUser;
            if (user != null) {
                this.user = user;
                this._updateUserDisplayName();
                window.location = '#/';
            } else {
                window.location = '#/login';
            }
        }, 400);
    }

    _updateUserDisplayName() {
        let splitEmail = this.user.email.split('.');
        let withoutAt = splitEmail[1].split('@');
        let displayName = splitEmail[0] +' '+ withoutAt[0];
        this.user.updateProfile({ displayName: displayName });
    }

    logOut() {
        this.firebase.auth().signOut().then(function () {
            window.location = '#/login';
        }, function (error) {
            console.log(error);
        });
    }
}
