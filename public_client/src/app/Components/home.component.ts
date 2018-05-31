import {Component} from '@angular/core' ;
import {AuthService} from '../services/auth.service' ;
import {Router} from '@angular/router' ;
@Component({
    selector : "home" ,
    templateUrl : "./Templates/Home/index.html"
})
export class HomeComponent{
    isLoggedIn : boolean ;
    constructor(public authService : AuthService , private router : Router){
        this.authService.af.auth.subscribe(
            (auth) => {
                if(auth == null) {
                    //not logged in
                    this.isLoggedIn =  false ;
                }
                else {
                    //logged in 
                    this.isLoggedIn = true ;
                }
            }
        )
    }
    login() {
        this.authService.loginWithGoogle().then((data) => {
            this.router.navigate(['']) ;
        })
    }
    logout() {
        this.authService.logout() ;
        this.router.navigate(['']);
    }
    onClick(){
        let x = document.querySelector("#footer");
        if (x){
            x.scrollIntoView();
        }
    }
}