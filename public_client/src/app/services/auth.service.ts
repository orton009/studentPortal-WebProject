import {Injectable} from '@angular/core' ;
import {Router} from '@angular/router' ;
import { AngularFire, AngularFireDatabase , FirebaseAuthState ,AuthProviders , AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {

    authState: FirebaseAuthState = null;
    constructor(public af:AngularFire ,  private db: AngularFireDatabase,
        private router:Router) {
            af.auth.subscribe((auth) => {
                this.authState = auth;
              });
        }

    loginWithGoogle() {
        return this.af.auth.login({
            provider : AuthProviders.Google ,
            method : AuthMethods.Popup
        });
    }

    logout() {
        return this.af.auth.logout() ;
    }

    get authenticated(): boolean {
        return this.authState !== null;
      }
    
}