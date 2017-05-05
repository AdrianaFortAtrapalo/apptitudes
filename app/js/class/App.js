
import Firebase from './Firebase';
import User from './User';

export default class App {

    constructor(){
        this.firebase   = new Firebase();
        this.user       = new User(this.firebase);
    }

    // 1.1 User
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
    userName(){
        this.user.getName();  
    }
}  