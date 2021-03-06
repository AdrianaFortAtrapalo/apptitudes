
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
        var arrayList = [];
        this.firebase.database().ref('users').on('value',(snapshot)=> {
            arrayList.length = 0;
            snapshot.forEach((element)=> {
                arrayList.push(element.val());
            });
        });
        return arrayList;
    } 

    // 1.4 Profile
    //-------------------------------------------------

}  