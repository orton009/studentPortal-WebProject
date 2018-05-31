import {Component} from '@angular/core'
import {DataService} from'./data.service' 
import {StudentType} from './StudentType' ;
@Component({
    selector : "studentsCard" ,
    templateUrl : "./students.component.html"
})
export class StudentsComponent{
    students : any ;
    constructor(private dataService:DataService){
       
        this.dataService.getStudents()
        .subscribe(students => {
            this.students = students ;
            console.log(this.students);
        });   
    }

    clickMethod(name: string) {
        if(confirm("Are you sure to delete "+name)) {
          console.log("Implement delete functionality here");
        }
      }

    deleteStudent(id : any , name:string){
        if(confirm("Are you sure to delete "+name)) {
            var students = this.students;
            
            this.dataService.deleteStudents(id).subscribe(data => {
                if(data.n == 1){
                    for(var i = 0;i < students.length;i++){
                        if(students[i]._id == id){
                            students.splice(i, 1);
                            console.log(students);
                        }
                    }
                }
            });
        }
    }

  
}