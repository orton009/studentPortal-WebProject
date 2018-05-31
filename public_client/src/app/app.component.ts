import { Component } from '@angular/core';
import {profileComponent} from './Components/profile.component' ;
import {StudentFormComponent} from './Components/student.form.component' ;
import {DataService} from './Components/data.service' ;
import { StudentsComponent } from './Components/students.component';
import { HomeComponent} from './Components/home.component' ;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' ,
  providers: [DataService]
})
export class AppComponent  {  }
