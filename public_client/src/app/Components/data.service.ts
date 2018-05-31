import {Injectable} from '@angular/core' ;
import {Http,Response,Headers} from '@angular/http' ;
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  
  constructor(private http:Http){
    console.log('student Service Initialized...');
}
  getStudentById(id:any){
    return this.http.get('http://localhost:3000/api/student/' + id)
    .map(res => res.json());
  }

  getStudents(){
      return this.http.get('http://localhost:3000/api/students')
          .map(res => res.json());
  }
  
  deleteStudents(id : any){
    return this.http.delete('http://localhost:3000/api/student/'+id)
        .map(res => res.json());
  }

  addTask(newTask:any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/student', JSON.stringify(newTask), {headers: headers})
        .map(res => res.json());
}

}
