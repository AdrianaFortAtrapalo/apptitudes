
import Firebase from './Firebase';
import User from './User';

export default class App {
    
    constructor(){
        this.firebase   = new Firebase();
        this.user       = new User(this.firebase);
        setTimeout(() => {
            this.user.getCurrentUser();  
        }, 400);
    }

    userLogin(email,password){
        this.user.login(email,password);
    } 
} 