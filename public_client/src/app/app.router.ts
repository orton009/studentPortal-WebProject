import {ModuleWithProviders} from '@angular/core'
import {Routes , RouterModule} from '@angular/router'

import {AppComponent} from './app.component' 
import {StudentsComponent} from './Components/students.component' 
import {profileComponent} from './Components/profile.component' 
import {StudentFormComponent} from './Components/student.form.component'

export const router : Routes = [
    {path : '' , redirectTo : './Components/students.component' , pathMatch : 'full'} ,
    {path : 'form' , component : StudentFormComponent} ,
    {path : 'profile' , component : profileComponent} 
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);