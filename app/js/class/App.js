
import Firebase from './Firebase';
import User from './User';

export default class App {

    constructor(){
        this.firebase   = new Firebase();
        this.user       = new User(this.firebase);
    }

    // 1.1 Login
    //-------------------------------------------------
    userExistCurrent(){
        this.user.getCurrentUser();
    }

    userLogIn(email,password){
        this.user.login(email,password);
    } 

    userLogOut(){
        this.user.logOut();
    }

    // 1.2 Search apptitudes
    //-------------------------------------------------
    // searchGetApptitudes(){

    // }

    // 1.3 Search Users
    //-------------------------------------------------
    searchGetAllUsers(){
        let eee = this.firebase.database().ref('/users/').once('value').then(function(snapshot) {
            var username = snapshot.val().username;
        });

        console.log(eee);
    }

    // 1.4 Profile
    //-------------------------------------------------

}  