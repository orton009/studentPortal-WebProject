import { Component } from '@angular/core';
import { OnInit , AfterContentInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http,Response, Headers, RequestOptions} from '@angular/http' ;
import {Observable} from 'rxjs/Rx';
import {DataService} from './data.service' ;
import {StudentType} from './StudentType' ;


@Component({
  selector: 'profile',
  templateUrl: './Templates/profilee/index.html'  
})

export class profileComponent  { 

  id: any;
  private sub: any;

  dataStudent:StudentType[] ;
  data:any ;
  constructor(private dataService:DataService, private route: ActivatedRoute){
    console.log("starting service ......");
    
      
  }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number

        // In a real app: dispatch action to load the details here.
        console.log("see : " + this.id);
        this.dataService.getStudentById(this.id)
          .subscribe(student => {
            this.data = student ;
          }); 
      });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
    
}