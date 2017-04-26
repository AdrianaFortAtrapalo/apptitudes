import './router';
import Firebase from './class/Firebase';
import User from './class/User';

const global = window;

global.firebase = new Firebase();

setTimeout(function(){ 
    let user = new User(firebase);
    user.getCurrentUser();  
}, 400);
