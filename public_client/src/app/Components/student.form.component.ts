import {Component} from '@angular/core' ;
import { NgForm } from '@angular/forms';
import {StudentType} from './StudentType' ;
import {DataService} from './data.service';
import {Router} from '@angular/router' ;
@Component({
    selector: 'studentForm',
    templateUrl: './Templates/StudentForm.html'  
  })
export class StudentFormComponent{
    skills : {value:string}[] ;
    languages : {value:string}[];
    interests:{value:string}[] ;
    student = new StudentType() ;
    fullName : string;
    constructor(private dataService:DataService , private router : Router) {
        this.student.education = [] ;
        this.student.languages = [] ;
        this.student.interests= [] ;
        this.student.skills = [];
        this.skills=[{value:''}];
        this.languages=[{value:''}];
        this.interests=[{value:''}];
        this.student.experiences = [] ;
        this.student.projects = [] ; 
    }
    //submit form
    saveStudent(){
        if(confirm("Are you sure to submit the form ")) {
            var i ;
            for(i=0;i<=this.languages.length-1;i++)
            this.student.languages[i] = this.languages[i].value;
            
            for(i=0;i<=this.interests.length-1;i++)
            this.student.interests[i]=this.interests[i].value;
            for(i=0;i<=this.skills.length-1;i++)
            this.student.skills[i]=this.skills[i].value;
            console.log(JSON.stringify(this.student));
                this.dataService.addTask(this.student)
                        .subscribe(task => {
                        });
            this.router.navigate(['/home']);
        }
        
    }


    //form related functions
    addEducation() {
        this.student.education.push({degree : '' , meta : '' ,time : '' });
        console.log(this.student.education);
      }
    addSkill(){
        
        this.skills.push({value : ''});
        console.log(this.student.skills);
    }
    addProjects(){
        this.student.projects.push({projectTitle : '' , projectTagline : ''});
        console.log(this.student.projects);
    }
    addExperiences(){
        this.student.experiences.push({jobTitle : '' , time : '' ,company : '' , details : ''});
        console.log(this.student.experiences);
    }
    
    addInterests(){
        this.interests.push({value : ''}); 
       // console.log(this.student.interests);    
    }
    
    addLanguage(){
        this.languages.push({value : ''});
        console.log(this.student.languages);
    }
}