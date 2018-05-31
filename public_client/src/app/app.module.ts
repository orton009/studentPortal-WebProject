import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { AppComponent }  from './app.component';
import {profileComponent} from './Components/profile.component' ;
import {HttpModule} from '@angular/http' ;
import {FormsModule} from '@angular/forms' ;
import {HomeComponent} from './Components/home.component' ;
import {StudentsComponent} from './Components/students.component' ;
import {StudentFormComponent} from './Components/student.form.component' ;
import {AngularFireModule} from 'angularfire2' ;
import {AuthService } from './services/auth.service' ;
import {AuthGuard} from './services/auth.guard' ;


export const firebaseConfig = {
  apiKey: "AIzaSyBJrFbfCjvT41WSNoonx-5twd03FV0sTCI",
    authDomain: "studentauth-39b29.firebaseapp.com",
    databaseURL: "https://studentauth-39b29.firebaseio.com",
    projectId: "studentauth-39b29",
    storageBucket: "studentauth-39b29.appspot.com",
    messagingSenderId: "576682436427"
}
@NgModule({
  imports:      [ BrowserModule , HttpModule , FormsModule , RouterModule.forRoot([
      {path:'' , redirectTo:'home' , pathMatch:'full'},
      {path:'home' , component : HomeComponent },
      { path : 'profile/:id' , component : profileComponent} ,
      {path : 'form' , component : StudentFormComponent , canActivate : [AuthGuard]} ,
      {path : 'students' , component : StudentsComponent , canActivate : [AuthGuard]} 
  ]) ,
  AngularFireModule.initializeApp(firebaseConfig)
],
  declarations: [ AppComponent , StudentsComponent , HomeComponent ,profileComponent , StudentFormComponent ],
  bootstrap:    [ AppComponent  ] ,
  providers : [
    AuthService ,
    AuthGuard
  ]
})
export class AppModule { }
